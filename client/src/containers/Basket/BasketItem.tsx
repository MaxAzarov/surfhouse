import React from "react";
import facebook from "./../../images/cardItems/facebook.png";
import twitter from "./../../images/cardItems/twitter.png";
import pinterest from "./../../images/cardItems/pinterest.png";
import { useDispatch, useSelector } from "react-redux";
import { ChangeCardAmount, removeBasketCard } from "../../actions/basket";
import { removeWishListCard } from "../../actions/wishlist";
import { AppState } from "../../reducers/rootReducer";
import { IBasket } from "./../../../../interfaces/basket";
import { IWishList } from "./../../../../interfaces/wishlist";
import { useLocation } from "react-router-dom";

interface IProps {
  quantity: number;
  _id: string;
  title: string;
  overview: string;
  newPrice: number;
  image?: string;
}

const BasketItem = ({ _id, title, overview, newPrice }: IProps) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const cards: IBasket = useSelector<AppState, any>((state) => state.basket);
  const wishlist: IWishList = useSelector<AppState, any>(
    (state) => state.wishlist
  );
  const token = useSelector<AppState, string>((state) => state.user.token);
  let currentCard = cards.cards.find((item) => item._id === _id);
  if (!currentCard) {
    currentCard = wishlist.wishlistCards.find((item) => item._id === _id);
  }

  return (
    <div className="product-item" key={_id}>
      <img src={require("./../../images/cards/thruster.png")} alt="" />
      <div className="product-item__info">
        <span>{title}</span>
        <p>{overview}</p>
        <ul>
          <li>
            <img src={facebook} alt="facebook" />
          </li>
          <li>
            <img src={twitter} alt="twitter" />
          </li>
          <li>
            <img src={pinterest} alt="pinterest" />
          </li>
        </ul>
      </div>
      <div className="product-item__price">€. {newPrice}</div>
      <div className="product-item__counter">
        {location.pathname !== "/wishlist" && (
          <div className="counter__wrapper">
            <div
              className="item-arrow__left arrow"
              onClick={() =>
                currentCard && currentCard.quantity === 1
                  ? null
                  : dispatch(ChangeCardAmount(_id, -1))
              }
            ></div>
            <input
              type="number"
              disabled
              value={currentCard && currentCard.quantity}
            />
            <div
              className="item-arrow__right arrow"
              onClick={() => {
                dispatch(ChangeCardAmount(_id, 1));
              }}
            ></div>
          </div>
        )}
      </div>
      {location.pathname !== "/wishlist" && (
        <div className="product-item__subtotal">
          €. {newPrice * currentCard!.quantity}
        </div>
      )}
      <div
        className="product-item__delete"
        onClick={() => {
          {
            location.pathname !== "/wishlist"
              ? dispatch(removeBasketCard(_id, token))
              : dispatch(removeWishListCard(_id, token));
          }
        }}
      >
        <div></div>
      </div>
    </div>
  );
};
export default React.memo(BasketItem);
