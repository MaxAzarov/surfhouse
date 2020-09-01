import React, { useEffect, useState } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { useQuery, useMutation } from "@apollo/client";

import "./CardItemContent.scss";
import { ICardItem } from "../../../../interfaces/card";
import { AppState } from "./../../reducers/rootReducer";
import Spinner from "../../components/Spinner/Spinner";
import { client } from "./../../index";
import { GetCard } from "../../graphql/Query/GetCardInfo";
import { addWishListItemQuery } from "../../graphql/Mutation/AddWishListItem";
import { FetchBasketCards } from "../../graphql/Query/FetchBasketCards";
import { addItem } from "../../graphql/Mutation/AddBasketItem";
import {
  IFetchBasketCards,
  IUpdateBasket,
} from "../../../../interfaces/basket";

type Props = {
  id: string;
};

interface ITabs {
  tab: string;
  info: string;
}

interface CardData {
  GetCardInfo: ICardItem;
}
interface IAddCard {
  AddBasketItem: {
    size: string;
    quantity: number;
    id: string;
    elementId: {
      title: string;
      newPrice: number;
      image: string;
      id: string;
      overview: string;
    };
  };
}
interface IAddCardVars {
  id: string;
  size: string;
  quantity: number;
}

const CardItemContent = (props: RouteComponentProps<Props>) => {
  const [tabs, setTabs] = useState<ITabs[]>();
  const [currentTab, setcurrentTab] = useState<string>();
  const [quantity, setQuantity] = useState<number>(1);
  const token = useSelector<AppState, string>((state) => state.user.token);
  const [size, setSize] = useState<string>();
  const [isAuthWarn, setAuthWarn] = useState("");

  const id = props.match.params.id;
  const { loading, error, data } = useQuery<CardData>(GetCard, {
    variables: { id },
  });
  useEffect(() => {
    if (!data) {
      return;
    }
    setTabs([
      {
        tab: "Products Description",
        info: data.GetCardInfo.productDescription,
      },
      {
        tab: "Additional information",
        info: data.GetCardInfo.additionalInfo,
      },
      { tab: "Reviews", info: data.GetCardInfo.reviews.join(" ") },
      { tab: "Product tags", info: data.GetCardInfo.productsTags.join(" ") },
    ]);
    if (data.GetCardInfo.size[0]) {
      setSize(data.GetCardInfo.size[0]);
    } else {
      setSize("33");
    }
    setcurrentTab(data.GetCardInfo.productDescription);
  }, [data]);

  const [addBasketItem] = useMutation<IAddCard, IAddCardVars>(addItem, {
    variables: {
      id: props.match.params.id,
      size: size as string,
      quantity,
    },
    update: (cache, { data: data2 }) => {
      const basket = cache.readQuery<IFetchBasketCards>({
        query: FetchBasketCards,
      });
      if (data2 && basket) {
        client.writeQuery<IFetchBasketCards, IUpdateBasket>({
          query: FetchBasketCards,
          data: {
            FetchBasketCards: [...basket.FetchBasketCards, data2.AddBasketItem],
          },
        });
      }
    },
  });

  const [addWishListItem] = useMutation(addWishListItemQuery, {
    variables: {
      id: props.match.params.id,
      quantity,
      size: size || 33,
    },
  });

  if (loading || !data) {
    return <Spinner />;
  }
  if (error) {
    return <div>Can't get this product</div>;
  }

  return (
    <>
      <div className="cart-item__wrapper">
        <div className="cart-item__images">
          <img src={require("./../../images/cards/thruster.png")} alt="" />
          <div className="cart-item__views"></div>
        </div>

        <div className="cart-item__info">
          <p>{data.GetCardInfo.title}</p>
          <div className="cart-item__price">
            <p>${data.GetCardInfo.newPrice}</p>
            <div className="cart-item__statuses">
              <p>
                Product code: <span>{data.GetCardInfo.productCode}</span>
              </p>
              <p>
                Availability:
                <span>
                  {data.GetCardInfo.availability ? "in stock" : "out of stock"}
                </span>
              </p>
            </div>
          </div>
          <div className="cart-item__overview">
            <span>QUICK OVERVIEW:</span>
            <p>{data.GetCardInfo.overview}</p>
          </div>

          <p className="size-title">size</p>
          <div className="cart-item__sizes">
            {data.GetCardInfo.size.map((sizeItem, index) => (
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
                if (token) {
                  addBasketItem();
                } else {
                  setAuthWarn(
                    "You need authorization to add goods into basket! "
                  );
                  setTimeout(() => {
                    setAuthWarn("");
                  }, 2000);
                }
              }}
            >
              Add to cart
            </button>
            <div className="cart-item__action">
              <ul>
                <li
                  onClick={() => {
                    if (token) {
                      addWishListItem();
                    } else {
                      setAuthWarn(
                        "You need authorization to add goods into basket! "
                      );
                      setTimeout(() => {
                        setAuthWarn("");
                      }, 2000);
                    }
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
        <div className="tab-info">{currentTab ? currentTab : "No info"}</div>
      </div>
    </>
  );
};

export default withRouter(CardItemContent);
