import { Dispatch } from "redux";
import { Actions } from "./../types/actions/rootActions";
import { UserLogin } from "./user";
import {
  FETCH_WISHLIST_CARDS,
  REMOVE_WISHLIST_CARD,
} from "./../types/actions/wishlist";
import useFetch from "./../utils/useFetch";

export const FetchWishlistCards = (token: string) => async (
  dispatch: Dispatch<Actions>
) => {
  if (token) {
    await fetch("/api/basket/wishlist", {
      headers: { Authorization: token },
    })
      .then((response) => response.json())
      .then((items) => {
        dispatch({ type: FETCH_WISHLIST_CARDS, payload: items.cards.wishlist });
      })
      .catch((e) => {
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        dispatch(UserLogin("", ""));
        alert("Need to authenticate");
      });
  }
};

export const removeWishListCard = (id: string, token: string) => async (
  dispatch: Dispatch<Actions>
) => {
  if (!id || !token) {
    return;
  }
  await useFetch("/api/wishlist/item", "DELETE", { id }, token);
  dispatch({ type: REMOVE_WISHLIST_CARD, payload: id });
};
