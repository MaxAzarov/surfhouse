import { ICardItem, ICardFetched } from "./card";
import { View } from "../client/src/types/actions/basket";

export interface IBasketCard {
  quantity: number;
  size: string;
  id?: any;
  elementId: ICardItem;
}
export type PriceValues = -1 | 1;

export interface IBasket {
  cards: IBasketCard[];
  view: View;
  search: string;
  amount: number;
  skip: number;
  price: PriceValues;
}

export interface IFetchBasketCards {
  FetchBasketCards: ICardFetched[];
}

export interface IUpdateBasket {
  data: {
    FetchBasketCards: ICardFetched[];
  };
}
