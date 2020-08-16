import { Response, Request, NextFunction, Router } from "express";
import isAuth from "./../middlewares/auth";
import User from "./../models/User";
const router = Router();

// add card to basket
router.post(
  "/basket",
  isAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user.id;
    const { id, size, quantity } = req.body;

    let customer = await User.findOne({ _id: user });
    if (customer) {
      customer.basket.push({ id, size, quantity });
      await customer.save();
      return res.sendStatus(204);
    }
    console.log(customer);
  }
);

router.get(
  "/basket/items",
  isAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user.id;

    let items = await User.findOne({ _id: user })
      .select("-email -name -company -_id -password")
      .populate({
        path: "basket.id",
      });
    // console.log("items:", items);
    return res.json({ cards: items });
  }
);

router.get(
  "/basket/clear",
  isAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    // console.log((req as any).user.id);
    const id = (req as any).user.id;
    let user = await User.findOne({ _id: id });
    if (user) {
      user.basket = [];
      await user.save();
    }
    console.log(user);
    return res.sendStatus(204);
  }
);

router.delete(
  "/basket/item",
  isAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.body;
      console.log(id);
      const userId = (req as any).user.id;
      let user = await User.findOne({ _id: userId });
      if (user) {
        user.basket = [
          ...user.basket.filter((item) => item._id.toString() !== id),
        ];
        console.log(user.basket);
        await user.save();
        res.json({ cards: user.basket });
      }
    } catch (e) {
      next("Invalid id!");
    }
  }
);

export default router;
