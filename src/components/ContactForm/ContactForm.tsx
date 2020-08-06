import React from "react";
import "./ContactForm.scss";
export default function ContactForm() {
  return (
    <div className="contact-form">
      <form action="">
        <label htmlFor="name">
          Full Name*
          <input type="text" id="name" placeholder="e.g robert smith" />
        </label>

        <label htmlFor="name">
          Email*
          <input type="text" id="name" placeholder="e.g name@nome.com" />
        </label>

        <label htmlFor="name">
          Company*
          <input
            type="text"
            id="name"
            placeholder="e.g your company (optional)"
          />
        </label>
        <label htmlFor="name">
          Subject*
          <input type="text" id="name" placeholder="e.g info" />
        </label>
        <label htmlFor="">
          Message
          <textarea name="" id="" cols={10} rows={10}></textarea>
        </label>
      </form>

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
}
