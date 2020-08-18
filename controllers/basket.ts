import { Response, Request, NextFunction, Router } from "express";
import isAuth from "./../middlewares/auth";
import User from "./../models/User";
const router = Router();

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
    return res.json({ cards: items });
  }
);

router.get(
  "/basket/wishlist",
  isAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user.id;

    let items = await User.findOne({ _id: user })
      .select("-email -name -company -_id -password")
      .populate({
        path: "wishlist.id",
      });
    return res.json({ cards: items });
  }
);

router.post(
  "/wishlist",
  isAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user.id;
    const { id, size, quantity } = req.body;

    let customer = await User.findOne({ _id: user });
    if (customer) {
      customer.wishlist.push({ id, size, quantity });
      await customer.save();
      return res.sendStatus(204);
    }
  }
);

router.get(
  "/basket/clear",
  isAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    const id = (req as any).user.id;
    let user = await User.findOne({ _id: id });
    if (user) {
      user.basket = [];
      await user.save();
    }
    return res.sendStatus(204);
  }
);

router.delete(
  "/basket/item",
  isAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.body;
      const userId = (req as any).user.id;
      let user = await User.findOne({ _id: userId });
      if (user) {
        user.basket = [
          ...user.basket.filter((item) => item._id.toString() !== id),
        ];
        await user.save();
        res.json({ cards: user.basket });
      }
    } catch (e) {
      next("Invalid id!");
    }
  }
);

router.delete(
  "/wishlist/item",
  isAuth,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.body;
      const userId = (req as any).user.id;
      let user = await User.findOne({ _id: userId });
      if (user) {
        user.wishlist = [
          ...user.wishlist.filter((item) => item._id.toString() !== id),
        ];
        await user.save();
        res.json({ cards: user.basket });
      }
    } catch (e) {
      next("Invalid id!");
    }
  }
);

export default router;
