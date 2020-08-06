import React from "react";
import "./CheckoutForm.scss";
import { Link } from "react-router-dom";
import BasketInfo from "../../components/BasketInfo/BasketInfo";
const CheckoutForm = () => {
  return (
    <>
      <div className="checkout-user">
        <div className="checkout-user__quest">
          <p className="checkout-quest__title">
            Continue as a <span>Guest!</span>
          </p>
          <p className="checkout-quest__info">
            Register with us for future convenience:
            <br />
            You can save your data in order <br />
            to speed up your next shopping experience
          </p>
          <label htmlFor="">
            <input type="radio" />
            Checkout as quest
          </label>
          <label htmlFor="">
            <input type="radio" />
            Register
          </label>
          <p className="checkout-quest__register">
            Register and save time!
            <br />
            Register with us for future convenience:
          </p>
          <ul>
            <li>Fast and easy checkout</li>
            <li>Easy access to your order history and status</li>
          </ul>
          <button>
            <Link to="/">
              <p>Fill the sign form</p>
            </Link>
          </button>
        </div>
        <div className="checkout-user__member">
          <p className="checkout-member__title">
            Are you a <span>Member?</span>
          </p>
          <p className="checkout-member__register">
            Already registered?
            <br />
            Please log in below
          </p>
          <form action="">
            <p>Email Address</p>
            <input type="email" value="" />
            <p>Password</p>
            <input type="password" />
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
        <BasketInfo></BasketInfo>
      </div>
      <div className="checkout-details">
        <div className="checkout-details__title">
          <p>Your Shipping information</p>
          <p>Your payment details</p>
        </div>
        <div className="checkout-details__form">
          <div className="checkout-details__leftbar">
            <label htmlFor="">
              Email*
              <input type="email" placeholder="e.g name@email.com" />
            </label>
            <label htmlFor="">
              Full name*
              <input type="text" placeholder="first name" />
              <input type="text" placeholder="surname" />
            </label>
            <label htmlFor="">
              Company
              <input type="text" placeholder="e.g. your company(optional)" />
            </label>
            <label htmlFor="">
              Address*
              <input type="text" placeholder="address line 1" />
              <input type="text" placeholder="address line 2" />
            </label>
          </div>
          <div className="checkout-details__center">
            <label htmlFor="">
              Postal Code*
              <input type="text" placeholder="e.g. 201000" />
            </label>
            <label htmlFor="">
              Town / City*
              <input type="text" placeholder="e.g. Los Angeles" />
            </label>
            <label htmlFor="">
              State / Country*
              <select name="" id="">
                <option value="">UA</option>
                <option value="">USA</option>
              </select>
            </label>
            <label htmlFor="">
              Province*
              <select name="" id="">
                <option value="">UA</option>
                <option value="">USA</option>
              </select>
            </label>
            <label htmlFor="">
              Mobile*
              <input type="tel" placeholder="phone" />
            </label>
          </div>
          <div className="checkout-details__rightbar">
            <label htmlFor="">
              Credit card number*
              <input type="text" />
            </label>
            <div className="rightbar-cards">
              <img src={require("./../../images/footer/6.png")} alt="" />
              <img src={require("./../../images/footer/2.png")} alt="" />
              <img src={require("./../../images/footer/5.png")} alt="" />
              <img src={require("./../../images/footer/4.png")} alt="" />
            </div>
            <label htmlFor="">
              expiraion data*
              <input type="date" />
            </label>
            <label htmlFor="">
              Secure code (ccv)*
              <input type="text" placeholder="000" />
            </label>
            <label htmlFor="">
              Name on card*
              <input type="text" placeholder="name on card" />
            </label>
          </div>
        </div>
        <p className="checkout-details__btn">Place Order</p>
      </div>
    </>
  );
};

export default CheckoutForm;
