import React from "react";
import facebook from "./../../images/cardItems/facebook.png";
import twitter from "./../../images/cardItems/twitter.png";
import pinterest from "./../../images/cardItems/pinterest.png";
import { useDispatch, useSelector } from "react-redux";
import { ChangeCardAmount, removeCard } from "../../actions/basket";
import { AppState } from "../../reducers/rootReducer";
import { IBasket, IBasketCard } from "./../../../../interfaces/basket";

interface IProps {
  quantity: number;
  _id: string;
  title: string;
  overview: string;
  newPrice: number;
  image?: string;
}

const BasketItem = ({ _id, title, overview, newPrice }: IProps) => {
  const dispatch = useDispatch();
  const cards: IBasket = useSelector<AppState, any>((state) => state.basket);
  const token = useSelector<AppState, string>((state) => state.user.token);
  const currentCard: IBasketCard[] = cards.cards.filter(
    (item) => item._id === _id
  );

  return (
    <div className="product-item" key={_id}>
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
        <div className="counter__wrapper">
          <div
            className="item-arrow__left arrow"
            onClick={() =>
              currentCard[0].quantity === 1
                ? null
                : dispatch(ChangeCardAmount(_id, -1))
            }
          ></div>
          <input type="number" disabled value={currentCard[0].quantity} />
          <div
            className="item-arrow__right arrow"
            onClick={() => {
              dispatch(ChangeCardAmount(_id, 1));
            }}
          ></div>
        </div>
      </div>
      <div className="product-item__subtotal">
        €. {newPrice * currentCard[0].quantity}
      </div>
      <div
        className="product-item__delete"
        onClick={() => dispatch(removeCard(_id, token))}
      >
        <div></div>
      </div>
    </div>
  );
};
export default React.memo(BasketItem);
