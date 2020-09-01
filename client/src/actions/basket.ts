import {
  SET_CARDS_VIEW,
  ISetCardView,
  View,
  SET_SEARCH,
  ISetSearch,
  SET_AMOUNT_SORT,
  SET_SKIP_SORT,
  SET_PRICE_SORT,
  ISetAmount,
  ISetSkip,
  ISetPrice,
} from "./../types/actions/basket";
import { PriceValues } from "../../../interfaces/basket";

export const setCardsView = (view: View): ISetCardView => ({
  type: SET_CARDS_VIEW,
  payload: view,
});

export const setSearch = (search: string): ISetSearch => ({
  type: SET_SEARCH,
  payload: search,
});

export const setAmount = (amount: number): ISetAmount => ({
  type: SET_AMOUNT_SORT,
  payload: amount,
});

export const setSkip = (skip: number): ISetSkip => ({
  type: SET_SKIP_SORT,
  payload: skip,
});

export const setPrice = (price: PriceValues): ISetPrice => ({
  type: SET_PRICE_SORT,
  payload: price,
});
