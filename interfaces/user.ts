import { Document } from "mongoose";
import { IBasketCard } from "./basket";

export interface IUser extends Document {
  email: string;
  name: string;
  company: string;
  password: string;
  basket: Array<IBasketCard>;
  wishlist: Array<IBasketCard>;
  _id: string;
}
