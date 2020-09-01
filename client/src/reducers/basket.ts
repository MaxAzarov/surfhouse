import { BasketActionTypes } from "../types/actions/basket";
import {
  SET_CARDS_VIEW,
  View,
  SET_SEARCH,
  SET_AMOUNT_SORT,
  SET_SKIP_SORT,
  SET_PRICE_SORT,
} from "./../types/actions/basket";
import { PriceValues } from "../../../interfaces/basket";

interface initial {
  view: View;
  search: string;
  amount: number;
  skip: number;
  price: PriceValues;
}

const initialState: initial = {
  search: "",
  view: "Rows",
  amount: 2,
  skip: 0,
  price: -1,
};

const basket = (state = initialState, action: BasketActionTypes) => {
  switch (action.type) {
    case SET_CARDS_VIEW:
      return {
        ...state,
        view: action.payload,
      };

    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };

    case SET_AMOUNT_SORT:
      return {
        ...state,
        amount: action.payload,
      };

    case SET_SKIP_SORT:
      return {
        ...state,
        skip: action.payload,
      };

    case SET_PRICE_SORT:
      return {
        ...state,
        price: action.payload,
      };

    default:
      return { ...state };
  }
};
export default basket;
