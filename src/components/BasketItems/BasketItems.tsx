import React from "react";
import "./BasketItems.scss";
import { Link } from "react-router-dom";
import BasketInfo from "../BasketInfo/BasketInfo";

export default function BasketItems() {
  return (
    <div className="cart-main__products">
      <div className="cart-products__leftbar">
        <div className="leftbar-products__titles">
          <ul>
            <li>Products name</li>
            <li>Unit Price</li>
            <li>QTY</li>
            <li>Subtotal</li>
          </ul>
        </div>
        <div className="leftbar-products__items">
          <div className="product-item">
            <img src={require("./../../images/cards/thruster.png")} alt="" />
            <div className="product-item__info">
              <span>Peeky Crooped</span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,{" "}
              </p>
              <ul>
                <li>
                  <img
                    src={require("./../../images/cardItems/facebook.png")}
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src={require("./../../images/cardItems/twitter.png")}
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src={require("./../../images/cardItems/pinterest.png")}
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <div className="product-item__price">€. 749,50</div>
            <div className="product-item__counter">
              <div className="counter__wrapper">
                <div className="item-arrow__left arrow"></div>
                <input type="number" disabled value="1" />
                <div className="item-arrow__right arrow"></div>
              </div>
            </div>
            <div className="product-item__subtotal">€. 749,50</div>
            <div className="product-item__delete">
              <div></div>
            </div>
          </div>

          <div className="product-item">
            <img src={require("./../../images/cards/thruster.png")} alt="" />
            <div className="product-item__info">
              <span>Peeky Crooped</span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,{" "}
              </p>
              <ul>
                <li>
                  <img
                    src={require("./../../images/cardItems/facebook.png")}
                    alt="facebook"
                  />
                </li>
                <li>
                  <img
                    src={require("./../../images/cardItems/twitter.png")}
                    alt="twitter"
                  />
                </li>
                <li>
                  <img
                    src={require("./../../images/cardItems/pinterest.png")}
                    alt="pinterest"
                  />
                </li>
              </ul>
            </div>
            <div className="product-item__price">€. 749,50</div>
            <div className="product-item__counter">
              <div className="counter__wrapper">
                <div className="item-arrow__left arrow"></div>
                <input type="number" disabled value="1" />
                <div className="item-arrow__right arrow"></div>
              </div>
            </div>
            <div className="product-item__subtotal">€. 749,50</div>
            <div className="product-item__delete">
              <div></div>
            </div>
          </div>
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
}
