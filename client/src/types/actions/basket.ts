export const CHANGE_CARD_AMOUNT = "CHANGE_CARD_AMOUNT";
export const FETCH_CARDS_BASKET = "FETCH_CARDS_BASKET";
export const REMOVE_BASKET_CARD = "REMOVE_BASKET_CARD";
export const SET_CARDS_COUNT = "SET_CARDS_COUNT";
export const SET_CARDS_VIEW = "SET_CARDS_VIEW";
export const CLEAR_BASKET = "CLEAR_BASKET";
// export const ADD_BASKET_CARD = "ADD_BASKET_CARD";

export type View = "Squared" | "Rows";

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

// export interface IAddBasketCard {
//   type: typeof ADD_BASKET_CARD;
//   payload: object;
// }

export type BasketActionTypes =
  | IChangeCardAmount
  | IFetchBasketCards
  | IRemoveBasketCard
  | ISetCardsCount
  | ISetCardView
  | IClearBasket;
//   | IAddBasketCard;
