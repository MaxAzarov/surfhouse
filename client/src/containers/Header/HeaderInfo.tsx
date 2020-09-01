import React, { useState } from "react";
import { Link, useLocation, RouteComponentProps } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { useSelector, useDispatch } from "react-redux";

import searchIcon from "./../../images/header/SearchIcon.png";
import basket from "./../../images/header/basket.png";
import { AppState } from "../../reducers/rootReducer";
import { Logout } from "../../actions/user";
import { FetchBasketCards } from "../../graphql/Query/FetchBasketCards";
import Spinner from "../../components/Spinner/Spinner";
import { FetchWishListCards } from "../../graphql/Query/FetchWishListCards";
import { ClearBasket } from "../../graphql/Mutation/ClearBasket";
import { setSearch } from "../../actions/basket";
import {
  IFetchBasketCards,
  IUpdateBasket,
} from "../../../../interfaces/basket";
import { IWishListCards } from "../../../../interfaces/wishlist";

const HeaderInfo = (props: RouteComponentProps) => {
  const location = useLocation();
  let cart = 0;
  let vat = 0;

  const { loading, data } = useQuery<IFetchBasketCards>(FetchBasketCards);
  const { data: WishListBasket } = useQuery<IWishListCards>(FetchWishListCards);

  const dispatch = useDispatch();
  const isAuth = useSelector<AppState, boolean>((state) => state.user.isAuth);
  const [headerInfo, setHeaderInfo] = useState(isAuth ? "Logout" : "Log in");
  const [searchLocal, setSearchLocal] = useState("");
  const [clearBasket] = useMutation(ClearBasket, {
    update(cache) {
      cache.writeQuery<IFetchBasketCards, IUpdateBasket>({
        query: FetchBasketCards,
        data: {
          FetchBasketCards: [],
        },
      });
    },
  });

  if (data) {
    data.FetchBasketCards.map((item) => {
      if (item) {
        cart += item.quantity * item.elementId.newPrice;
        vat += item.quantity * item.elementId.newPrice * 0.07;
      }
      return false;
    });
  }
  if (loading) {
    return <Spinner></Spinner>;
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
                props.history.push("/checkout");
              }
            }}
          >
            {headerInfo}
          </li>
          <Link
            to="/wishlist"
            style={{ color: "#fb4d01", textDecoration: "none" }}
          >
            <li>Wish list({WishListBasket?.FetchWishListCards.length})</li>
          </Link>
        </ul>
      </div>

      <div className="header-nav__basket">
        <div className="header-nav-wrapper">
          <Link to="/cart">
            <img src={basket} alt="basket" />
          </Link>

          <div className="header-nav__info">
            <div className="header-nav__price">$ {Math.ceil(cart + vat)}</div>
            <div className="header-nav__amount">
              {data?.FetchBasketCards.length} items
            </div>
          </div>
          <div className="header-nav__edit">
            <div
              className="header-nav-edit__delete"
              onClick={() => {
                clearBasket();
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

      <div className="header-nav-search">
        <div className="header-nav-wrapper">
          <input
            type="text"
            placeholder="search"
            value={searchLocal}
            disabled={location.pathname === "/" ? true : false}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchLocal(e.target.value);
            }}
          />
          <div
            className="header-nav-cross"
            onClick={() => {
              dispatch(setSearch(""));
              setSearchLocal("");
            }}
          ></div>
        </div>
        <button
          type="submit"
          disabled={location.pathname === "/" ? true : false}
          onClick={() => {
            dispatch(setSearch(searchLocal));
            props.history.push({
              search: `?limit=${2}&skip=${0}&price=${-1}&search=${searchLocal}`,
            });
          }}
        >
          <img src={searchIcon} alt="" />
        </button>
      </div>

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
