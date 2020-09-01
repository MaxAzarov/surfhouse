import React from "react";
import { useLocation } from "react-router-dom";
import { useMutation } from "@apollo/client";

import facebook from "./../../images/cardItems/facebook.png";
import twitter from "./../../images/cardItems/twitter.png";
import pinterest from "./../../images/cardItems/pinterest.png";
import { FetchBasketCards } from "../../graphql/Query/FetchBasketCards";
import { ChangeCardQuantity } from "../../graphql/Mutation/ChangeCardAmount";
import { removeBasketCard } from "../../graphql/Mutation/RemoveBasketCard";
import { RemoveWishListItem } from "../../graphql/Mutation/RemoveWishListItem";
import { FetchWishListCards } from "../../graphql/Query/FetchWishListCards";
import { ICardFetched } from "../../../../interfaces/card";
import {
  IFetchBasketCards,
  IUpdateBasket,
} from "../../../../interfaces/basket";
import { IWishListCards } from "../../../../interfaces/wishlist";

interface IProps {
  quantity: number;
  id: string;
  title: string;
  overview: string;
  newPrice: number;
  image?: string;
}

interface IUpdateWishListCards {
  data: {
    FetchBasketCards: ICardFetched[];
  };
}

const BasketItem = ({ id, title, overview, newPrice, quantity }: IProps) => {
  const location = useLocation();

  const [removeBasketItem] = useMutation(removeBasketCard, {
    update: (cache, { data: removedCard }) => {
      const basket = cache.readQuery<IFetchBasketCards>({
        query: FetchBasketCards,
      });
      if (basket) {
        cache.writeQuery<IFetchBasketCards, IUpdateBasket>({
          query: FetchBasketCards,
          data: {
            FetchBasketCards: [
              ...basket.FetchBasketCards.filter(
                (item) => item.id !== removedCard.RemoveBasketItem.id
              ),
            ],
          },
        });
      }
    },
  });

  const [ChangeCardAmount] = useMutation(ChangeCardQuantity);
  const [RemoveWishListCard] = useMutation(RemoveWishListItem, {
    update(cache, { data }) {
      const WishListBasket = cache.readQuery<IWishListCards>({
        query: FetchWishListCards,
      });
      if (WishListBasket && data) {
        cache.writeQuery<IWishListCards, IUpdateWishListCards>({
          query: FetchWishListCards,
          data: {
            FetchWishListCards: [
              ...WishListBasket.FetchWishListCards.filter(
                (item) => item.id !== data.RemoveWishListItem.id
              ),
            ],
          },
        });
      }
    },
  });
  return (
    <div className="product-item" key={id}>
      <img src={require("./../../images/cards/thruster.png")} alt="" />
      <div className="product-item__info">
        <span>{title}</span>
        <p>{overview}</p>
        <ul>
          <li>
            <img src={facebook} alt="facebook" />
          </li>
          <li>
            <img src={twitter} alt="twitter" />
          </li>
          <li>
            <img src={pinterest} alt="pinterest" />
          </li>
        </ul>
      </div>
      <div className="product-item__price">€. {newPrice}</div>
      <div className="product-item__counter">
        {location.pathname !== "/wishlist" && (
          <div className="counter__wrapper">
            <div
              className="item-arrow__left arrow"
              onClick={() =>
                quantity === 1
                  ? null
                  : ChangeCardAmount({ variables: { id, count: -1 } })
              }
            ></div>
            <input type="number" disabled value={quantity} />
            <div
              className="item-arrow__right arrow"
              onClick={() => {
                ChangeCardAmount({ variables: { id, count: 1 } });
              }}
            ></div>
          </div>
        )}
      </div>
      {location.pathname !== "/wishlist" && (
        <div className="product-item__subtotal">€. {newPrice * quantity}</div>
      )}
      <div
        className="product-item__delete"
        onClick={() => {
          if (location.pathname !== "/wishlist") {
            removeBasketItem({ variables: { id } });
          } else {
            RemoveWishListCard({ variables: { id } });
          }
        }}
      >
        <div></div>
      </div>
    </div>
  );
};
export default React.memo(BasketItem);
