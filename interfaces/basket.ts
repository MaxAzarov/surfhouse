import { ICardItem } from "./card";
import { View } from "../client/src/types/actions/basket";

export interface IBasketCard {
  quantity: number;
  size: number;
  _id?: any;
  id: ICardItem;
}

type PriceValues = -1 | 1;

export interface IBasket {
  cards: IBasketCard[];
  cardsAmount: number;
  view: View;
  search: string;
  amount: number;
  skip: number;
  price: PriceValues;
}
