export const CHANGE_CARD_AMOUNT = "CHANGE_CARD_AMOUNT";
export const FETCH_CARDS_BASKET = "FETCH_CARDS_BASKET";
export const REMOVE_BASKET_CARD = "REMOVE_BASKET_CARD";
export const SET_CARDS_COUNT = "SET_CARDS_COUNT";
export const SET_CARDS_VIEW = "SET_CARDS_VIEW";
export const CLEAR_BASKET = "CLEAR_BASKET";
export const SET_SEARCH = "SET_SEARCH";

export const SET_AMOUNT_SORT = "SET_AMOUNT_SORT";
export const SET_SKIP_SORT = "SET_SKIP_SORT";
export const SET_PRICE_SORT = "SET_PRICE_SORT";

export type View = "Squared" | "Rows";

type PriceValues = -1 | 1;

export interface IChangeCardAmount {
  type: typeof CHANGE_CARD_AMOUNT;
  id: string;
  count: number;
}

export interface IFetchBasketCards {
  type: typeof FETCH_CARDS_BASKET;
  payload: Array<object>;
}

export interface IRemoveBasketCard {
  type: typeof REMOVE_BASKET_CARD;
  payload: string;
}

export interface ISetCardsCount {
  type: typeof SET_CARDS_COUNT;
  payload: number;
}

export interface ISetCardView {
  type: typeof SET_CARDS_VIEW;
  payload: View;
}

export interface IClearBasket {
  type: typeof CLEAR_BASKET;
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
  | IChangeCardAmount
  | IFetchBasketCards
  | IRemoveBasketCard
  | ISetCardsCount
  | ISetCardView
  | IClearBasket
  | ISetSearch
  | ISetAmount
  | ISetSkip
  | ISetPrice;
