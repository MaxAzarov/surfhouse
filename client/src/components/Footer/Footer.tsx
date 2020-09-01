import React, { useState } from "react";
import "./Footer.scss";
import { useLazyQuery } from "@apollo/client";
import { sendEmailQuery } from "../../graphql/Query/SendEmail";

export default function Footer() {
  const [email, setEmail] = useState<string>("");
  const [sendEmail] = useLazyQuery(sendEmailQuery);
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-category">
          <p>Category</p>
          <ul>
            <li>Home</li>
            <li>About us </li>
            <li>Eshop</li>
            <li>Features</li>
            <li>New collections</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-category">
          <p>Our Account</p>
          <ul>
            <li>Your Account</li>
            <li>Personal Information</li>
            <li>Addresses</li>
            <li>Discount</li>
            <li>Orders history</li>
            <li>Addresses</li>
            <li>Search Terms</li>
          </ul>
        </div>
        <div className="footer-category">
          <p>Our Support</p>
          <ul>
            <li>Site map</li>
            <li>Search Terms</li>
            <li>Advanced Search</li>
            <li>Mobile</li>
            <li>Contact us</li>
            <li>Mobile</li>
            <li>Addresses</li>
          </ul>
        </div>
        <div className="newsletter">
          <div className="newsletter-title">Newsletter</div>
          <p>Join thousands of ohter people subscibe to our news</p>
          <form
            action=""
            onSubmit={() => {
              sendEmail();
            }}
          >
            <input
              type="email"
              value={email}
              placeholder="insert email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <button type="submit">Submit</button>
          </form>
          <div className="newsletter-payments">
            <img src={require("./../../images/footer/1.png")} alt="" />
            <img src={require("./../../images/footer/2.png")} alt="" />
            <img src={require("./../../images/footer/3.png")} alt="" />
            <img src={require("./../../images/footer/4.png")} alt="" />
            <img src={require("./../../images/footer/5.png")} alt="" />
            <img src={require("./../../images/footer/6.png")} alt="" />
          </div>
        </div>
        <div className="footer-about">
          <div className="footer-about__title">About us</div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
