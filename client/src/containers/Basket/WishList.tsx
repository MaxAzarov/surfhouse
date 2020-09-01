import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import "./BasketItem.scss";
import BasketInfo from "../../components/BasketInfo/BasketInfo";
import { FetchWishListCards } from "../../graphql/Query/FetchWishListCards";
import Spinner from "../../components/Spinner/Spinner";
import BasketItem from "./BasketItem";
import { ICardFetched } from "../../../../interfaces/card";
interface IFetchWishListCards {
  FetchWishListCards: ICardFetched[];
}

const BasketItems = () => {
  const { loading, data } = useQuery<IFetchWishListCards>(FetchWishListCards);
  if (loading || !data) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="cart-main__products">
      <div className="cart-products__leftbar">
        {data.FetchWishListCards.length === 0 ? (
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
          {data.FetchWishListCards.map((item) => {
            const { quantity, id } = item;
            const { image, title, overview, newPrice } = item.elementId;
            return (
              <BasketItem
                id={id}
                title={title}
                overview={overview}
                newPrice={newPrice}
                quantity={quantity}
                image={image}
              ></BasketItem>
            );
          })}
          {data.FetchWishListCards.length === 0 && (
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
