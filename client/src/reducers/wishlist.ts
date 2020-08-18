import {
  FETCH_WISHLIST_CARDS,
  WishListActions,
  REMOVE_WISHLIST_CARD,
} from "./../types/actions/wishlist";
import { IWishList } from "../../../interfaces/wishlist";

const initialState: IWishList = {
  wishlistCards: [],
};

const wishlist = (state = initialState, action: WishListActions) => {
  switch (action.type) {
    case FETCH_WISHLIST_CARDS:
      return {
        ...state,
        wishlistCards: [...action.payload],
      };

    case REMOVE_WISHLIST_CARD:
      return {
        ...state,
        wishlistCards: [
          ...state.wishlistCards.filter(
            (item) => item._id.toString() !== action.payload.toString()
          ),
        ],
      };

    default:
      return {
        ...state,
      };
  }
};
export default wishlist;
