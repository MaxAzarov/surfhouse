export const FETCH_WISHLIST_CARDS = "FETCH_WISHLIST_CARDS";
export const REMOVE_WISHLIST_CARD = "REMOVE_WISHLIST_CARD";

export interface IFetchWishListCards {
  type: typeof FETCH_WISHLIST_CARDS;
  payload: Array<object>;
}

export interface IRemoveWishListCard {
  type: typeof REMOVE_WISHLIST_CARD;
  payload: string;
}

export type WishListActions = IFetchWishListCards | IRemoveWishListCard;
