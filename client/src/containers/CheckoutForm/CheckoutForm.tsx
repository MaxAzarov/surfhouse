import React, { useState, ChangeEvent } from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UseLogin } from "./../../actions/user";

import "./CheckoutForm.scss";
import BasketInfo from "../../components/BasketInfo/BasketInfo";
import useFetch from "./../../utils/useFetch";

interface Register {
  token: string;
  id: string;
}

const CheckoutForm: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();

  const HandleLogin = async () => {
    const response: Register = await useFetch(
      "/api/login",
      "POST",
      { email, password },
      ""
    );
    console.log(response.token, response.id);
    if ((response.token, response.id)) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("id", response.id);
      dispatch(UseLogin(response.id, response.token));
      return history.push("/");
    }
  };
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
          <div>
            <label htmlFor="member-email">
              Email Address
              <input
                type="email"
                value={email}
                placeholder="email"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                id="member-email"
              />
            </label>

            <label htmlFor="member-password">
              Password
              <input
                type="password"
                value={password}
                placeholder="password"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                id="member-password"
              />
            </label>

            <br />
            <button onClick={HandleLogin}>Login</button>
          </div>
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

export default withRouter(CheckoutForm);
