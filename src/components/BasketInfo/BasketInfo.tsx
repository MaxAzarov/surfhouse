import React from "react";
import "./BasketInfo.scss";
import { Link } from "react-router-dom";

const BasketInfo: React.FC = () => {
  return (
    <div className="basket">
      <p>Review your cart</p>
      <div className="cart-info">
        <div className="cart-info__cart">
          <span>Your cart</span>
          <span>€. 1,399.50</span>
        </div>
        <div className="cart-info__shipping">
          <span>SHIPPING</span>
          <span>FREE</span>
        </div>
        <div className="cart-info__vat">
          <span>vat</span>
          <span>€. 112.20</span>
        </div>
        <div className="cart-info__total">
          <span>Order total</span>
          <span>€. 1,511.70</span>
        </div>
      </div>
      <Link to="/checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
};
export default BasketInfo;
