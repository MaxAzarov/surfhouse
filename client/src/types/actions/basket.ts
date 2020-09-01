import { PriceValues } from "../../../../interfaces/basket";

export const SET_CARDS_COUNT = "SET_CARDS_COUNT";
export const SET_CARDS_VIEW = "SET_CARDS_VIEW";
export const SET_SEARCH = "SET_SEARCH";

export const SET_AMOUNT_SORT = "SET_AMOUNT_SORT";
export const SET_SKIP_SORT = "SET_SKIP_SORT";
export const SET_PRICE_SORT = "SET_PRICE_SORT";

export type View = "Squared" | "Rows";

export interface ISetCardsCount {
  type: typeof SET_CARDS_COUNT;
  payload: number;
}

export interface ISetCardView {
  type: typeof SET_CARDS_VIEW;
  payload: View;
}

export interface ISetSearch {
  type: typeof SET_SEARCH;
  payload: string;
}

export interface ISetAmount {
  type: typeof SET_AMOUNT_SORT;
  payload: number;
}

export interface ISetSkip {
  type: typeof SET_SKIP_SORT;
  payload: number;
}

export interface ISetPrice {
  type: typeof SET_PRICE_SORT;
  payload: PriceValues;
}

export type BasketActionTypes =
  | ISetCardsCount
  | ISetCardView
  | ISetSearch
  | ISetAmount
  | ISetSkip
  | ISetPrice;
