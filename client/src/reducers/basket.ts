import { BasketActionTypes } from "../types/actions/basket";
import {
  CHANGE_CARD_AMOUNT,
  FETCH_CARDS_BASKET,
  REMOVE_BASKET_CARD,
  SET_CARDS_COUNT,
  SET_CARDS_VIEW,
  CLEAR_BASKET,
  View,
  SET_SEARCH,
  SET_AMOUNT_SORT,
  SET_SKIP_SORT,
  SET_PRICE_SORT,
} from "./../types/actions/basket";

import { IBasketCard } from "../../../interfaces/basket";
type PriceValues = -1 | 1;

interface initial {
  cards: IBasketCard[];
  cardsAmount: number;
  view: View;
  search: string;
  amount: number;
  skip: number;
  price: PriceValues;
}

const initialState: initial = {
  cards: [],
  cardsAmount: 0,
  search: "",
  view: "Rows",
  amount: 2,
  skip: 0,
  price: -1,
};

const basket = (state = initialState, action: BasketActionTypes) => {
  switch (action.type) {
    case CHANGE_CARD_AMOUNT:
      return {
        ...state,
        cards: [
          ...state.cards.map((item) => {
            if (item._id === action.id) {
              item.quantity += action.count;
            }
            return item;
          }),
        ],
      };

    case REMOVE_BASKET_CARD:
      return {
        ...state,
        cards: [
          ...state.cards.filter(
            (item) => item._id.toString() !== action.payload.toString()
          ),
        ],
      };

    case FETCH_CARDS_BASKET:
      return {
        ...state,
        cards: [...action.payload],
      };

    case SET_CARDS_VIEW:
      return {
        ...state,
        view: action.payload,
      };

    case CLEAR_BASKET:
      return {
        ...state,
        cards: [],
      };

    case SET_CARDS_COUNT:
      return {
        ...state,
        cardsAmount: action.payload,
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
