import { Request, Response, NextFunction, Router } from "express";
import bcrypt from "bcryptjs";
import User from "./../models/User";
import jwt from "jsonwebtoken";
import { IUser } from "./../interfaces/user";
import isAuth from "./../middlewares/auth";
const stripe = require("stripe")(
  "sk_test_51HHUcVD5MDvRt67KbZ699mWbXNkdu1Tf84ttKokTZ0pf3KGAp9K2dG6ui9SZuGvl3iIomfRtBZliTALcuaCtz4mu00R0aEAJ4w"
);

const router = Router();

router.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const user: IUser | null = await User.findOne({ email: email });
      if (!user) {
        return res.status(400).send("No user");
      }
      const doMatch = await bcrypt.compare(password, user.password);
      if (doMatch) {
        const token = await jwt.sign({ id: user._id }, "mysecret", {
          expiresIn: "1h",
        });
        res.send({ token, id: user._id });
      }
    } catch (e) {
      next("Incorrect data");
    }
  }
);

router.post(
  "/register",
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, company, password } = req.body;

    const candidate = await User.findOne({ email });

    if (!candidate) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        name,
        email,
        password: hashedPassword,
        company,
      });
      await user.save();
      return res.json({ id: user._id });
    }
  }
);

interface ISession {
  id: any;
}
router.post(
  "/checkout",
  isAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    const id = (req as any).user.id;
    const userCards = await User.findOne({ _id: id })
      .populate({
        path: "basket.id",
      })
      .select("+basket -_id -name -email -password -company -wishlist");
    const user = await User.findOne({ _id: id });
    let total = 0;
    let vat = 0;
    if (userCards) {
      userCards.basket.map((item) => {
        total += item.quantity * item.id.newPrice;
      });
      vat = total * 0.07;
    }
    const token = await stripe.tokens.create({
      card: { ...req.body.stripeToken },
    });
    console.log(token);
    stripe.customers
      .create({
        email: user?.email,
        source: token.id,
      })
      .then((customer: ISession) => {
        return stripe.charges.create(
          userCards?.basket.map((item) => {
            return {
              name: item.id.title,
              description: item.id.overview,
              amount: Math.floor(item.id.newPrice),
              currency: "usd",
              quantity: item.quantity,
            };
          })
        );
      })
      .catch((err: unknown) => {
        console.log(err);
      });
  }
);

export default router;
