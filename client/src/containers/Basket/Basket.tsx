import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import "./BasketItem.scss";
import BasketInfo from "../../components/BasketInfo/BasketInfo";
import BasketItem from "./BasketItem";
import Spinner from "../../components/Spinner/Spinner";
import { FetchBasketCards } from "../../graphql/Query/FetchBasketCards";
import { IFetchBasketCards } from "../../../../interfaces/basket";

const BasketItems = () => {
  const { loading, error, data } = useQuery<IFetchBasketCards>(
    FetchBasketCards
  );
  if (error) {
    return <div>Something went wrong</div>;
  }
  if (loading || !data) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="cart-main__products">
      <div className="cart-products__leftbar">
        {data.FetchBasketCards.length !== 0 && (
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
          {data &&
            data.FetchBasketCards.map((item) => {
              if (item && item.elementId) {
                const { quantity, id } = item;
                const { image, title, overview, newPrice } = item.elementId;
                return (
                  <BasketItem
                    key={id}
                    id={id}
                    title={title}
                    overview={overview}
                    newPrice={newPrice}
                    quantity={quantity}
                    image={image}
                  ></BasketItem>
                );
              } else {
                return <div></div>;
              }
            })}
          {data.FetchBasketCards.length === 0 && (
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
export default BasketItems;
