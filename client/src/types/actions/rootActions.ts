import { BasketActionTypes } from "./basket";
import { UserActionTypes } from "./user";
import { WishListActions } from "./wishlist";

export type Actions = BasketActionTypes | UserActionTypes | WishListActions;
