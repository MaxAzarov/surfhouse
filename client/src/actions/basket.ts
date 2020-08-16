import {
  CHANGE_CARD_AMOUNT,
  FETCH_CARDS_BASKET,
  IChangeCardAmount,
  BasketActionTypes,
  REMOVE_BASKET_CARD,
  SET_CARDS_COUNT,
  ISetCardsCount,
  SET_CARDS_VIEW,
  ISetCardView,
  CLEAR_BASKET,
  View,
} from "./../types/actions/basket";
import { Dispatch } from "redux";
import useFetch from "../utils/useFetch";
import { UseLogin } from "./user";
import { Actions } from "./../types/actions/rootActions";

export const ChangeCardAmount = (
  id: string,
  count: number
): IChangeCardAmount => ({
  type: CHANGE_CARD_AMOUNT,
  id,
  count,
});

export const FetchBasketCards = (token: string) => async (
  dispatch: Dispatch<Actions>
) => {
  if (token) {
    await fetch("/api/basket/items", {
      headers: { Authorization: token },
    })
      .then((response) => response.json())
      .then((items) => {
        console.log(items);

        dispatch({ type: FETCH_CARDS_BASKET, payload: items.cards.basket });
      })
      .catch((e) => {
        console.log(e);
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        dispatch(UseLogin("", ""));
        alert("Need to authenticate");
      });
  }
};

export const removeCard = (id: string, token: string) => async (
  dispatch: Dispatch<BasketActionTypes>
) => {
  if (!id || !token) {
    return;
  }
  await useFetch("/api/basket/item", "DELETE", { id }, token);
  dispatch({ type: REMOVE_BASKET_CARD, payload: id });
};

export const setCardsCount = (count: number): ISetCardsCount => ({
  type: SET_CARDS_COUNT,
  payload: count,
});

export const setCardsView = (view: View): ISetCardView => ({
  type: SET_CARDS_VIEW,
  payload: view,
});

export const clearBasket = (token: string) => async (
  dispatch: Dispatch<BasketActionTypes>
) => {
  if (!token) {
    return;
  }
  await fetch("/api/basket/clear", { headers: { Authorization: token } });
  dispatch({ type: CLEAR_BASKET });
};
