import React, { useState, ChangeEvent } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMutation, useLazyQuery } from "@apollo/client";
import { UserLogin } from "./../../actions/user";

import "./CheckoutForm.scss";
import BasketInfo from "../../components/BasketInfo/BasketInfo";
import { UserLoginQuery } from "../../graphql/Mutation/UserLogin";
import { CheckoutQuery } from "../../graphql/Query/Checkout";

const CheckoutForm = ({ history }: RouteComponentProps) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkoutEmail, setCheckoutEmail] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [creditCard, setCreditCard] = useState<string>();
  const [expDate, setExpDate] = useState<string>();
  const [secureCode, setSecureCode] = useState<string>();
  const [Login, { data }] = useMutation(UserLoginQuery);
  if (data) {
    localStorage.setItem("token", data.userLogin.token);
    localStorage.setItem("id", data.userLogin.id);
    dispatch(UserLogin(data.userLogin.id, data.userLogin.token));
    history.push("/");
  }
  const [stripeHandler] = useLazyQuery(CheckoutQuery, {
    variables: {
      number: creditCard,
      exp_month: expDate?.split("-")[1],
      exp_year: expDate?.split("-")[0],
      cvc: secureCode,
      address_line1: address,
    },
  });
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
            <button
              onClick={() => {
                Login({ variables: { email, password } });
              }}
            >
              Login
            </button>
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
