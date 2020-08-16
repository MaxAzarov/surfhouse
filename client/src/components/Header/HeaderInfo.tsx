import React, { useState } from "react";
import { Link, useLocation, RouteComponentProps } from "react-router-dom";
import searchIcon from "./../../images/header/SearchIcon.png";
import basket from "./../../images/header/basket.png";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../reducers/rootReducer";
import { IBasket } from "../../../../interfaces/basket";
import { Logout } from "../../actions/user";
import { clearBasket } from "../../actions/basket";

const HeaderInfo = ({ history }: RouteComponentProps) => {
  const [search, setSearch] = useState<string>("");
  const location = useLocation();
  const cards: IBasket = useSelector<AppState, any>((state) => state.basket);
  const token = useSelector<AppState, string>((state) => state.user.token);
  let cart = 0;
  let vat = 0;
  const dispatch = useDispatch();
  const isAuth = useSelector<AppState, boolean>((state) => state.user.isAuth);
  const [headerInfo, setHeaderInfo] = useState(isAuth ? "Logout" : "Log in");

  if (cards.cards.length) {
    cards.cards.map((item) => {
      if (item) {
        cart += item.quantity * item.id.newPrice;
        vat += item.quantity * item.id.newPrice * 0.07;
      }
      return false;
    });
  }
  return (
    <div className="header-nav">
      <div className="header-nav__row">
        <ul>
          <li
            onClick={() => {
              if (headerInfo === "Logout") {
                dispatch(Logout());
                setHeaderInfo("Log in");
              } else {
                history.push("/checkout");
              }
            }}
          >
            {headerInfo}
          </li>
          <li>Wish list(0)</li>
        </ul>
      </div>

      <div className="header-nav__basket">
        <div className="header-nav-wrapper">
          <Link to="/cart">
            <img src={basket} alt="basket" />
          </Link>

          <div className="header-nav__info">
            <div className="header-nav__price">$ {Math.ceil(cart + vat)}</div>
            <div className="header-nav__amount">{cards.cards.length} items</div>
          </div>
          <div className="header-nav__edit">
            <div
              className="header-nav-edit__delete"
              onClick={() => {
                dispatch(clearBasket(token));
              }}
            ></div>
            <Link to="/cart" style={{ textDecoration: "none", color: "#000" }}>
              <span>Edit</span>
            </Link>
          </div>
        </div>

        <div className="header-basket-links">
          <p>
            <Link
              to="/cart"
              style={{
                textDecoration: "none",
              }}
              className="link-item"
            >
              <span>View cart</span>
            </Link>
          </p>

          <p>
            <Link
              to="/checkout"
              style={{
                textDecoration: "none",
              }}
              className="link-item"
            >
              <span>Checkout</span>
            </Link>
          </p>
        </div>
      </div>

      <form className="header-nav-search">
        <div className="header-nav-wrapper">
          <input
            type="text"
            placeholder="search"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />
          <div className="header-nav-cross" onClick={() => setSearch("")}></div>
        </div>
        <button type="submit">
          <img src={searchIcon} alt="" />
        </button>
      </form>

      {location.pathname === "/" && (
        <div className="header-welcome">
          <p>WELCOME TO SURFHOUSE</p>
          <p className="header-welcome-text">
            The only online store you will ever need for all your windsurfing
            and kitesurfing and SUP needs
          </p>
        </div>
      )}
    </div>
  );
};

export default HeaderInfo;
