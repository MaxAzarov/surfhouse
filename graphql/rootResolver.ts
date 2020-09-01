import { Cards } from "../models/CardItem";
import User from "./../models/User";
import { IUser } from "../interfaces/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ICardItem } from "../interfaces/card";
import mongoose from "mongoose";
const stripe = require("stripe")(
  "sk_test_51HHUcVD5MDvRt67KbZ699mWbXNkdu1Tf84ttKokTZ0pf3KGAp9K2dG6ui9SZuGvl3iIomfRtBZliTALcuaCtz4mu00R0aEAJ4w"
);

interface IUserRegister {
  name: string;
  email: string;
  company: string;
  password: string;
}
interface IStripeToken {
  stripeToken: {
    number: any;
    exp_month: any;
    exp_year: any;
    cvc: any;
    address_line1: any;
  };
}
interface IChangeCardAmount {
  id: string;
  count: number;
}
interface UserLogin {
  email: string;
  password: string;
}

interface IAddBasketItem {
  id: ICardItem;
  size: string;
  quantity: number;
}
interface ICardId {
  id: string;
}

interface IAddWishListItem {
  id: any;
  quantity: number;
  size: string;
}

interface IShopSorting {
  category: string;
  limit: number;
  price: number;
  search?: string;
  skip: number;
}
export default {
  getNewCards: async function () {
    try {
      const cards = await Cards.find().limit(5);
      return cards;
    } catch (e) {}
  },
  getSaleCards: async function () {
    try {
      return await Cards.find().where("newPrice").lt(50).limit(4);
    } catch (e) {}
  },
  getTopCards: async function () {
    try {
      const cards = await Cards.find().sort({ newPrice: 1 }).limit(4);
      return cards;
    } catch (e) {}
  },
  userLogin: async function ({ email, password }: UserLogin) {
    try {
      const user: IUser | null = await User.findOne({ email: email });
      if (user) {
        const doMatch = await bcrypt.compare(password, user.password);
        if (doMatch) {
          const token = await jwt.sign({ id: user._id }, "mysecret", {
            expiresIn: "1h",
          });
          return {
            token,
            id: user._id,
          };
        }
      }
    } catch (e) {}
  },
  userRegister: async function ({
    name,
    email,
    company,
    password,
  }: IUserRegister) {
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
      return user._id.toString();
    }
  },
  FetchBasketCards: async function ({}, req: Request) {
    const user = (req as any).userId;
    let items = await User.findOne({ _id: user })
      .select("-email -name -company -_id -password -wishlist -__v")
      .populate({
        path: "basket.elementId",
      });
    if (items) {
      return items.basket;
    } else {
      return [];
    }
  },
  GetCardInfo: async function ({ id }: ICardId) {
    try {
      if (id) {
        const card = await Cards.findOne({ _id: id });
        return card;
      }
    } catch (e) {}
  },
  AddBasketItem: async function (
    { id, size, quantity }: IAddBasketItem,
    req: Request
  ) {
    const user = (req as any).userId;
    const elementId = id;
    const _id = new mongoose.Types.ObjectId();
    const item = {
      _id,
      elementId,
      size,
      quantity,
    };
    let customer = await User.findOne({ _id: user });
    if (customer) {
      customer.basket.push(item);
      await customer.save();
      const card = Cards.findOne({ _id: id });
      return {
        quantity,
        size,
        id: _id,
        elementId: card,
      };
    }
  },
  AddWishListItem: async function (
    { id, quantity, size }: IAddWishListItem,
    req: Request
  ) {
    const user = (req as any).userId;
    const isAuth = (req as any).isAuth;
    const _id = new mongoose.Types.ObjectId();
    const newWishListItem = {
      _id,
      elementId: id,
      size,
      quantity,
    };
    if (user && isAuth) {
      let customer: IUser | null = await User.findOne({ _id: user });
      if (customer) {
        customer.wishlist.push(newWishListItem);
        await customer.save();
        const populated = await Cards.findOne({ _id: id });
        return {
          quantity,
          size,
          id: _id,
          elementId: populated,
        };
      }
    }
  },
  GetLikedCards: async function () {
    try {
      const cards = await Cards.find().where("newPrice").lt(40).limit(3);
      return cards;
    } catch (e) {}
  },
  RemoveBasketItem: async function ({ id }: ICardId, req: Request) {
    try {
      const userId = (req as any).userId;
      if ((req as any).isAuth) {
        let user = await User.findOne({ _id: userId });
        if (user) {
          const deletedCard = user.basket.find((item) => item.id == id);
          user.basket = [
            ...user.basket.filter((item) => item.id.toString() !== id),
          ];
          await user.save();
          return deletedCard;
        }
      }
    } catch (e) {}
  },
  ChangeCardAmount: async function (
    { id, count }: IChangeCardAmount,
    req: Request
  ) {
    const userId = (req as any).userId;

    const user = await User.findOne({ _id: userId });
    if (user) {
      let changedCard = user.basket.find((item) => item.id === id);
      user.basket = [...user.basket.filter((item) => item.id !== id)];
      if (changedCard) {
        changedCard.quantity += count;
        user.basket = [...user.basket, changedCard];
        await user.save();
        return changedCard;
      }
    }
  },
  FetchWishListCards: async function ({}, req: Request) {
    const user = (req as any).userId;
    if ((req as any).isAuth) {
      let items = await User.findOne({ _id: user })
        .select("-email -name -company -_id -password -basket")
        .populate({
          path: "wishlist.elementId",
        });
      return items?.wishlist;
    } else {
      return [];
    }
  },
  RemoveWishListItem: async function ({ id }: { id: string }, req: Request) {
    try {
      const userId = (req as any).userId;
      let user = await User.findOne({ _id: userId });
      const populatedCard = await Cards.findOne({ _id: id });
      if (user) {
        const deletedCard = user.wishlist.find((item) => item.id == id);
        user.wishlist = [
          ...user.wishlist.filter((item) => item.id.toString() !== id),
        ];
        await user.save();
        return {
          id: deletedCard?.id,
          quantity: deletedCard?.quantity,
          size: deletedCard?.size,
          elementId: populatedCard,
        };
      }
    } catch (e) {}
  },
  ClearBasket: async function ({}, req: Request) {
    if ((req as any).isAuth) {
      const userId = (req as any).userId;
      const user = await User.findOne({ _id: userId });

      if (user) {
        user.basket = [];
        await user.save();
        return "ok";
      }
    }
  },
  ShopSorting: async function ({
    category,
    limit,
    price,
    search,
    skip,
  }: IShopSorting) {
    try {
      const count = await Cards.find({
        category: category,
      }).countDocuments();
      let regex;
      if (search) {
        regex = new RegExp(search, "gi");
      } else {
        regex = new RegExp("", "gi");
      }
      const cards: ICardItem[] = await Cards.find({
        category: category,
        title: regex,
      })
        .limit(+limit)
        .skip(+skip)
        .sort({
          newPrice: +price,
        });
      return {
        count,
        cards,
      };
    } catch (e) {}
  },
  Checkout: async function ({ stripeToken }: IStripeToken, req: Request) {
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
      card: { ...stripeToken },
    });
    stripe.customers
      .create({
        email: user?.email,
        source: token.id,
      })
      .then((customer: ICardId) => {
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
      .catch((err: unknown) => {});
  },
  SendEmail: async function ({ email }: { email: string }) {
    return "ok";
  },
};
