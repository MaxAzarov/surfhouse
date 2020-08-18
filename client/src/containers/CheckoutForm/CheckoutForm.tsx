import React, { useState, ChangeEvent } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserLogin } from "./../../actions/user";

import "./CheckoutForm.scss";
import BasketInfo from "../../components/BasketInfo/BasketInfo";
import useFetch from "./../../utils/useFetch";
import { AppState } from "../../reducers/rootReducer";

interface Register {
  token: string;
  id: string;
}

const CheckoutForm: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const token = useSelector<AppState, string>((state) => state.user.token);

  const [checkoutEmail, setCheckoutEmail] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [creditCard, setCreditCard] = useState<string>();
  const [expDate, setExpDate] = useState<string>();
  const [secureCode, setSecureCode] = useState<string>();
  const HandleLogin = async () => {
    const response: Register = await useFetch(
      "/api/login",
      "POST",
      { email, password },
      ""
    );
    if ((response.token, response.id)) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("id", response.id);
      dispatch(UserLogin(response.id, response.token));
      return history.push("/");
    }
  };

  const stripeHandler = () => {
    if (token) {
      fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          stripeToken: {
            number: creditCard,
            exp_month: expDate?.split("-")[1],
            exp_year: expDate?.split("-")[0],
            cvc: secureCode,
            address_line1: address,
          },
        }),
      })
        .then((response) => response.json())
        .then((id) => {});
    }
  };
  return (
    <>
      <div className="checkout-user">
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
            <label htmlFor="email">
              Email*
              <input
                type="email"
                placeholder="e.g name@email.com"
                id="email"
                value={checkoutEmail}
                onChange={(e) => {
                  setCheckoutEmail(e.target.value);
                }}
              />
            </label>

            <label htmlFor="address">
              Address*
              <input
                type="text"
                placeholder="address line"
                id="address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="checkout-details__rightbar">
            <label htmlFor="creditcard">
              Credit card number*
              <input
                type="text"
                id="creditcard"
                value={creditCard}
                onChange={(e) => {
                  setCreditCard(e.target.value);
                }}
              />
            </label>
            <label htmlFor="date">
              expiraion data*
              <input
                type="date"
                id="date"
                value={expDate}
                onChange={(e) => {
                  setExpDate(e.target.value);
                }}
              />
            </label>
            <label htmlFor="cvv">
              Secure code (cvv)*
              <input
                type="text"
                placeholder="000"
                name="cvv"
                value={secureCode}
                onChange={(e) => {
                  setSecureCode(e.target.value);
                }}
              />
            </label>
          </div>
        </div>
        <button
          className="checkout-details__btn"
          onClick={() => {
            stripeHandler();
          }}
        >
          Place Order
        </button>
      </div>
    </>
  );
};

export default withRouter(CheckoutForm);
