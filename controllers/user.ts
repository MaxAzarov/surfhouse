import { Request, Response, NextFunction, Router } from "express";
import bcrypt from "bcryptjs";
import User from "./../models/User";
import jwt from "jsonwebtoken";
import { IUser } from "./../interfaces/user";

const router = Router();

router.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      //   console.log(email, password);
      const user: IUser | null = await User.findOne({ email: email });
      //   console.log(user);
      if (!user) {
        return res.status(400).send("No user");
      }
      const doMatch = await bcrypt.compare(password, user.password);
      //   console.log(doMatch);
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
    console.log(name, email, company, password);

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

export default router;
