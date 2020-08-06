import React from "react";
import "./CardItemContent.scss";

export default function CardItemContent() {
  return (
    <>
      <div className="cart-item__wrapper">
        <div className="cart-item__images">
          {/* <div className="card-item__image"> */}
          <img src={require("./../../images/cards/thruster.png")} alt="" />
          {/* </div> */}
          <div className="cart-item__views"></div>
        </div>

        <div className="cart-item__info">
          <p>PEEKY CROPPED</p>
          <div className="cart-item__price">
            <p>€. 578.50</p>
            <div className="cart-item__statuses">
              <p>
                Product code: <span>257</span>{" "}
              </p>
              <p>
                Availability: <span>in stock</span>{" "}
              </p>
            </div>
          </div>
          <div className="cart-item__overview">
            <span>QUICK OVERVIEW:</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. When an
              unknown printer took a galley of type.
            </p>
          </div>

          <p className="size-title">size</p>
          <div className="cart-item__sizes">
            <div className="cart-item__size">25</div>
            <div className="cart-item__size">25</div>
          </div>
          <p className="length-title">Length</p>
          <div className="cart-item__lengths">
            <div className="cart-item__length">32</div>
            <div className="cart-item__length">32</div>
          </div>

          <div className="cart-item__footer">
            <div className="cart-item__quantity">
              <p>Quantity:</p>
              <div className="quantity-wrapper">
                <span>-</span>
                <input value="1" disabled type="text" />
                <span>+</span>
              </div>
            </div>

            <button className="cart-item__add">add to cart</button>
            <div className="cart-item__action">
              <ul>
                <li>Add to Wishlist</li>
                <li>Add to compare</li>
                <li>Email to a friend</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-item__tabs">
        <div className="tabs-title">
          <ul>
            <li className="active">Products Description</li>
            <li>Additional information</li>
            <li>Reviews</li>
            <li>Product tags</li>
          </ul>
        </div>
        <div className="tab-info">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. There
          are many variations of passages of Lorem Ipsum available, but the
          majority have suffered alteration in some form, by injected humour, or
          randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn't
          anything embarrassing hidden in the middle of text. - 6.1 oz. 100%
          preshrunk heavyweight cotton - Shoulder-to-shoulder taping -
          Double-needle sleeves and bottom hem It uses a dictionary of over 200
          Latin words, combined with a handful of model sentence structures, to
          generate Lorem Ipsum which looks reasonable.{" "}
        </div>
      </div>
    </>
  );
}
