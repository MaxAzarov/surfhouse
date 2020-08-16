import React from "react";
import "./BasketInfo.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../../reducers/rootReducer";
import { IBasket } from "../../../../interfaces/basket";

const BasketInfo: React.FC = () => {
  const basket: IBasket = useSelector<AppState, any>((state) => state.basket);
  let cart = 0;
  let vat = 0;

  if (basket.cards.length) {
    basket.cards.map((item) => {
      if (item) {
        cart += item.quantity * item.id.newPrice;
        vat += item.quantity * item.id.newPrice * 0.07;
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
