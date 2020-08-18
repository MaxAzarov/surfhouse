import React, { useEffect, useState, useCallback } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./CardItemContent.scss";
import { ICardItem } from "../../../../interfaces/card";
import { AppState } from "./../../reducers/rootReducer";
import { FetchBasketCards } from "../../actions/basket";
import Spinner from "../../components/Spinner/Spinner";

type Props = {
  id: string;
};

interface ITabs {
  tab: string;
  info: string;
}

const CardItemContent = (props: RouteComponentProps<Props>) => {
  const [tabs, setTabs] = useState<ITabs[]>();
  const [card, setCard] = useState<ICardItem>();
  const [currentTab, setcurrentTab] = useState<string>();
  const [quantity, setQuantity] = useState<number>(1);
  const token = useSelector<AppState, string>((state) => state.user.token);
  const isAuth = useSelector<AppState, boolean>((state) => state.user.isAuth);
  const [size, setSize] = useState<string>();
  const dispatch = useDispatch();
  const [isAuthWarn, setAuthWarn] = useState("");

  const fetchCard = useCallback(async () => {
    const response = await fetch(`/api/cards/${props.match.params.id}`);
    const data = await response.json();
    setCard(data);
    setTabs([
      { tab: "Products Description", info: data.productDescription },
      { tab: "Additional information", info: data.additionalInfo },
      { tab: "Reviews", info: data.reviews },
      { tab: "Product tags", info: data.productsTags.join(" ") },
    ]);
    setcurrentTab(data.productDescription);
    setSize(data.size[0]);
  }, [props.match.params.id]);
  useEffect(() => {
    fetchCard();
  }, [fetchCard]);

  const AddCardHandler = async () => {
    if (!token || !isAuth) {
      setAuthWarn("You need authorization to add goods into basket! ");
      setTimeout(() => {
        setAuthWarn("");
      }, 2000);
    }

    await fetch("/api/basket", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ id: props.match.params.id, quantity, size }),
    });

    await dispatch(FetchBasketCards(token));
  };

  const AddWishList = async () => {
    if (!token || !isAuth) {
      setAuthWarn("You need authorization to add goods into basket! ");
      setTimeout(() => {
        setAuthWarn("");
      }, 2000);
    }

    await fetch("/api/wishlist", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ id: props.match.params.id, quantity, size }),
    });
  };

  return (
    <>
      {card ? (
        <>
          <div className="cart-item__wrapper">
            <div className="cart-item__images">
              <img src={require("./../../images/cards/thruster.png")} alt="" />
              <div className="cart-item__views"></div>
            </div>

            <div className="cart-item__info">
              <p>{card.title}</p>
              <div className="cart-item__price">
                <p>${card.newPrice}</p>
                <div className="cart-item__statuses">
                  <p>
                    Product code: <span>{card.productCode}</span>
                  </p>
                  <p>
                    Availability:
                    <span>
                      {card.availability ? "in stock" : "out of stock"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="cart-item__overview">
                <span>QUICK OVERVIEW:</span>
                <p>{card.overview}</p>
              </div>

              <p className="size-title">size</p>
              <div className="cart-item__sizes">
                {card.size.map((sizeItem, index) => (
                  <div
                    className={
                      "cart-item__size " + (size === sizeItem ? "active" : "")
                    }
                    key={index}
                    onClick={() => setSize(sizeItem)}
                  >
                    {sizeItem}
                  </div>
                ))}
              </div>

              <div className="cart-item__footer">
                <div className="cart-item__quantity">
                  <p>Quantity:</p>
                  <div className="quantity-wrapper">
                    <span
                      onClick={() =>
                        setQuantity((prevstate) =>
                          prevstate === 1 ? prevstate : prevstate - 1
                        )
                      }
                    >
                      -
                    </span>
                    <input value={quantity} disabled type="text" />
                    <span onClick={() => setQuantity(quantity + 1)}>+</span>
                  </div>
                </div>

                <p className="cart-item__warn">{isAuthWarn}</p>
                <button
                  className="cart-item__add"
                  onClick={() => {
                    AddCardHandler();
                  }}
                >
                  Add to cart
                </button>
                <div className="cart-item__action">
                  <ul>
                    <li
                      onClick={() => {
                        AddWishList();
                      }}
                    >
                      Add to Wishlist
                    </li>
                    <li>Email to a friend</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-item__tabs">
            <div className="tabs-title">
              <ul>
                {tabs &&
                  tabs.map((tab, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setcurrentTab(tab.info);
                      }}
                      className={currentTab === tab.info ? "active" : ""}
                    >
                      {tab.tab}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="tab-info">
              {currentTab ? currentTab : "No info"}
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default withRouter(CardItemContent);
