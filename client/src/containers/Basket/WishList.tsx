import React, { useEffect } from "react";
import "./BasketItem.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import BasketInfo from "../../components/BasketInfo/BasketInfo";
import { AppState } from "../../reducers/rootReducer";
import BasketItem from "./BasketItem";
import { IWishList } from "./../../../../interfaces/wishlist";
import { FetchWishlistCards } from "../../actions/wishlist";

const BasketItems = () => {
  const token = useSelector<AppState, string>((state) => state.user.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchWishlistCards(token));
  }, [token, dispatch]);
  const cards: IWishList = useSelector<AppState, any>(
    (state) => state.wishlist
  );
  return (
    <div className="cart-main__products">
      <div className="cart-products__leftbar">
        {cards.wishlistCards.length === 0 ? (
          ""
        ) : (
          <div className="leftbar-products__titles">
            <ul>
              <li>Products name</li>
              <li>Unit Price</li>
              <li>QTY</li>
              <li>Subtotal</li>
            </ul>
          </div>
        )}
        <div className="leftbar-products__items">
          {cards.wishlistCards?.map((item) => {
            if (item && item.id) {
              const { quantity, _id } = item;
              const { image, title, overview, newPrice } = item.id;
              return (
                <BasketItem
                  _id={_id}
                  title={title}
                  overview={overview}
                  newPrice={newPrice}
                  quantity={quantity}
                  image={image}
                ></BasketItem>
              );
            }
          })}
          {cards.wishlistCards.length === 0 && (
            <p style={{ fontStyle: "italic" }}>Your basket is empty!</p>
          )}
          <div className="leftbar-products__coupon">
            <p>Have you got a coupon code?</p>
            <form action="">
              <input type="text" placeholder="insert code" />
              <button type="submit">Update Shopping Cart</button>
            </form>
            <Link to="/shopping">
              <span>or continue shopping</span>
            </Link>
          </div>
        </div>
      </div>
      <BasketInfo></BasketInfo>
    </div>
  );
};
export default React.memo(BasketItems);
