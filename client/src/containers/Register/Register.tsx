import React, { useState } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import "./Register.scss";
import useFetch from "../../utils/useFetch";

interface IResponse {
  id: string;
}

const Register = ({ history }: RouteComponentProps) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const HandleRegister = async () => {
    const response: IResponse = await useFetch(
      "/api/register",
      "POST",
      { name, email, company, password },
      ""
    );
    if (response.id) {
      history.push("/checkout");
    }
  };
  return (
    <div className="contact-form">
      <div className="contact-form__main">
        <label htmlFor="name">
          Full Name*
          <input
            type="text"
            id="name"
            placeholder="e.g robert smith"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label htmlFor="email">
          Email*
          <input
            type="text"
            id="email"
            placeholder="e.g name@nome.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="company">
          Company*
          <input
            type="text"
            id="company"
            placeholder="e.g your company (optional)"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password*
          <input
            type="password"
            id="password"
            placeholder="e.g info"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button onClick={HandleRegister}>Register</button>
      </div>

      <div className="contact-form__line"></div>

      <div className="contact-form__info">
        <p className="contact-form__title">Address</p>
        <p className="contact-form__location ">
          Ut interdum tristique est com modo pharetra.
        </p>
        <p className="contact-form__text">
          Lorem Ipsum is simply dummy text of the printing and over
        </p>
        <a href="tel:19003249876">1-900-324-9876</a>
        <a href="mailto:info@surfhouse.com">info@surfhouse.com</a>
        <p className="contact-form__questions">
          If you have questions about your order or need any general information
          our customer service team will be happy to assist you.
        </p>
      </div>
    </div>
  );
};
export default withRouter(Register);
