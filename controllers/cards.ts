import { Request, Response, NextFunction, Router } from "express";
import { Cards } from "./../models/CardItem";
const router = Router();

router.post(
  "/cards",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.query.limit && req.query.skip && req.query.price) {
        const cards = await Cards.find({ category: req.body.category })
          .limit(+req.query.limit)
          .skip(+req.query.skip)
          .sort({ newPrice: +req.query.price });
        const count = await Cards.find({
          category: req.body.category,
        }).countDocuments();
        // console.log(count);
        // return res.send(apparels);
        return res.json({ count, cards });
      }
      const cards = await Cards.find({ category: req.body.category });
      const count = await Cards.find({
        category: req.body.category,
      }).countDocuments();
      //   console.log(count);
      return res.json({ count, cards });
    } catch (e) {
      next(`Cannot get apparels,${e}`);
    }
  }
);

router.get(
  "/cards/new",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cards = await Cards.find().limit(5);
      //   console.log(cards);
      res.json({ cards });
    } catch (e) {
      next("Can not find cards");
    }
  }
);

router.get(
  "/cards/sale",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cards = await Cards.find().where("newPrice").lt(50).limit(4);
      //   console.log(cards);
      res.json({ cards });
    } catch (e) {
      next("Can not find cards");
    }
  }
);

router.get(
  "/cards/top",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cards = await Cards.find().sort({ newPrice: 1 }).limit(4);
      //   console.log(cards);
      res.json({ cards });
    } catch (e) {
      next("Can not find cards");
    }
  }
);

router.get(
  "/cards/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const card = await Cards.findOne({ _id: req.params.id });
      res.send(card);
    } catch (e) {
      next("Cannot get card!");
    }
  }
);

export default router;
