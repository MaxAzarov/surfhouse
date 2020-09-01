import React from "react";
import "./BasketInfo.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { FetchBasketCards } from "../../graphql/Query/FetchBasketCards";
import Spinner from "../Spinner/Spinner";
import { IFetchBasketCards } from "../../../../interfaces/basket";

const BasketInfo: React.FC = () => {
  let cart = 0;
  let vat = 0;
  const { loading, data } = useQuery<IFetchBasketCards>(FetchBasketCards);

  if (loading) {
    return <Spinner></Spinner>;
  }
  if (data) {
    data.FetchBasketCards.map((item) => {
      if (item) {
        cart += item.quantity * item.elementId.newPrice;
        vat += item.quantity * item.elementId.newPrice * 0.07;
      }
      return false;
    });
  }

  return (
    <div className="basket">
      <p>Review your cart</p>
      <div className="cart-info">
        <div className="cart-info__cart">
          <span>Your cart</span>
          <span>€. {Math.ceil(cart)}</span>
        </div>
        <div className="cart-info__shipping">
          <span>SHIPPING</span>
          <span>FREE</span>
        </div>
        <div className="cart-info__vat">
          <span>vat</span>
          <span>€. {Math.ceil(vat)}</span>
        </div>
        <div className="cart-info__total">
          <span>Order total</span>
          <span>€. {Math.ceil(cart + vat)}</span>
        </div>
      </div>
      <Link to="/checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
};
export default BasketInfo;
