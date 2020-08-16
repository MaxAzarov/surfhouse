import { ICardItem } from "./card";
import { View } from "../client/src/types/actions/basket";

export interface IBasketCard {
  quantity: number;
  size: number;
  _id?: any;
  id: ICardItem;
}

export interface IBasket {
  cards: IBasketCard[];
  cardsAmount: number;
  view: View;
}
