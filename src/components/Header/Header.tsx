import React from "react";
import "./Header.scss";
import { RouteComponentProps } from "react-router-dom";
import { Link, useLocation, withRouter } from "react-router-dom";
type Props = {
  id: string;
};
const Header = ({ match }: RouteComponentProps<Props>) => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/contact" && (
        <header className="header">
          <div className="header-container">
            <div className="header-top">
              <img src={require("./../../images/header/logo.png")} alt="" />
              <ul>
                <li>
                  <img
                    src={require("./../../images/header/facebook.png")}
                    alt="facebook"
                  />
                </li>
                <li>
                  <img
                    src={require("./../../images/header/twitter.png")}
                    alt="twitter"
                  />
                </li>
                <li>
                  <img
                    src={require("./../../images/header/youtube.png")}
                    alt="youtube"
                  />
                </li>
                <li>
                  <img
                    src={require("./../../images/header/pinterest.png")}
                    alt="pinterest"
                  />
                </li>
                <li>
                  <img
                    src={require("./../../images/header/insta.png")}
                    alt="instagram"
                  />
                </li>
                <select name="" id="">
                  <option value="EN">EN</option>
                  <option value="UA">UA</option>
                </select>
              </ul>
            </div>
            {location.pathname === "/" && (
              <div className="header-content">
                <div className="header-left">
                  <div className="header-nav">
                    <div className="header-nav__row">
                      <ul>
                        <li>Log in</li>
                        <li>Wish list(0)</li>
                      </ul>
                    </div>

                    <div className="header-nav__basket">
                      <div className="header-nav-wrapper">
                        <img
                          src={require("./../../images/header/basket.png")}
                          alt="basket"
                        />
                        <div className="header-nav__info">
                          <div className="header-nav__price">$1,459.50</div>
                          <div className="header-nav__amount">2 items</div>
                        </div>
                        <div className="header-nav__edit">
                          <div className="header-nav-edit__delete"></div>
                          <span>Edit</span>
                        </div>
                      </div>

                      <div className="header-basket-links">
                        <span>
                          <Link
                            to="/cart"
                            style={{
                              color: "#fff",
                              textDecoration: "none",
                              textTransform: "uppercase",
                            }}
                            className="link-item"
                          >
                            View cart
                          </Link>
                        </span>

                        <span>
                          <Link
                            to="/checkout"
                            style={{
                              color: "#fff",
                              textDecoration: "none",
                              textTransform: "uppercase",
                            }}
                            className="link-item"
                          >
                            Checkout
                          </Link>
                        </span>
                      </div>
                    </div>

                    <form className="header-nav-search">
                      <div className="header-nav-wrapper">
                        <input type="text" placeholder="search" value="" />
                        <div className="header-nav-cross"></div>
                      </div>
                      <button type="submit">
                        <img
                          src={require("./../../images/header/SearchIcon.png")}
                          alt=""
                        />
                      </button>
                    </form>
                    {/*  */}

                    <div className="header-welcome">
                      <p>WELCOME TO SURFHOUSE</p>
                      <p className="header-welcome-text">
                        The only online store you will ever need for all your
                        windsurfing and kitesurfing and SUP needs
                      </p>
                    </div>
                  </div>
                </div>

                <div className="header-info">
                  <div className="header-info__left">
                    <div className="header-info__title">JP FUNRIDE 2014</div>
                    <div className="header-info__subtitle">
                      Super easy going freeride boards based on the X-Cite Ride
                      shape concept with additional control and super easy
                      jibing.
                    </div>
                    <button className="header-info__btn">Buy now</button>
                  </div>
                  <div className="header-info__right">
                    <div className="header-arrow__left"></div>
                    <div className="header-arrow__right"></div>
                  </div>
                </div>
              </div>
            )}

            {(location.pathname === "/shop" || match.params.id) && (
              <>
                <div className="header-content">
                  <div className="header-left">
                    <div className="header-nav">
                      <div className="header-nav__row">
                        <ul>
                          <li>Log in</li>
                          <li>Wish list(0)</li>
                        </ul>
                      </div>

                      <div className="header-nav__basket">
                        <div className="header-nav-wrapper">
                          <img
                            src={require("./../../images/header/basket.png")}
                            alt=""
                          />
                          <div className="header-nav__info">
                            <div className="header-nav__price">$1,459.50</div>
                            <div className="header-nav__amount">2 items</div>
                          </div>
                          <div className="header-nav__edit">
                            <div className="header-nav-edit__delete"></div>
                            <span>Edit</span>
                          </div>
                        </div>

                        <div className="header-basket-links">
                          <span>
                            <Link
                              to="/cart"
                              style={{
                                color: "#fff",
                                textDecoration: "none",
                                textTransform: "uppercase",
                              }}
                              className="link-item"
                            >
                              View cart
                            </Link>
                          </span>

                          <span>
                            <Link
                              to="/checkout"
                              style={{
                                color: "#fff",
                                textDecoration: "none",
                                textTransform: "uppercase",
                              }}
                              className="link-item"
                            >
                              Checkout
                            </Link>
                          </span>
                        </div>
                      </div>

                      <form className="header-nav-search">
                        <div className="header-nav-wrapper">
                          <input type="text" placeholder="search" value="" />
                          <div className="header-nav-cross"></div>
                        </div>
                        <button type="submit">
                          <img
                            src={require("./../../images/header/SearchIcon.png")}
                            alt=""
                          />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          {location.pathname === "/home" && (
            <div className="header__pages">
              <div className="header-page__item active"></div>
              <div className="header-page__item"></div>
              <div className="header-page__item"></div>
            </div>
          )}
        </header>
      )}

      {location.pathname === "/contact" && (
        <header className="header-contact">
          <div className="header-contact__container">
            <img src={require("./../../images/header/logo.png")} alt="" />
            <ul>
              <li>
                <img
                  src={require("./../../images/header/facebook.png")}
                  alt=""
                />
              </li>
              <li>
                <img
                  src={require("./../../images/header/twitter.png")}
                  alt=""
                />
              </li>
              <li>
                <img
                  src={require("./../../images/header/youtube.png")}
                  alt=""
                />
              </li>
              <li>
                <img
                  src={require("./../../images/header/pinterest.png")}
                  alt=""
                />
              </li>
              <li>
                <img src={require("./../../images/header/insta.png")} alt="" />
              </li>
              <select name="" id="">
                <option value="EN">EN</option>
                <option value="UA">UA</option>
              </select>
            </ul>
          </div>
        </header>
      )}
    </>
  );
};
export default withRouter(Header);
