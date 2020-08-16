import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import "./Cards.scss";

import { ICardItem } from "./../../../../interfaces/card";
import { useSelector } from "react-redux";
import { AppState } from "../../reducers/rootReducer";
import { IBasket } from "../../../../interfaces/basket";

interface Props extends RouteComponentProps {
  cards: ICardItem[];
  category?: string;
}

const Cards: React.FC<Props> = ({ cards, category, history }) => {
  const view: IBasket = useSelector<AppState, any>((state) => state.basket);
  console.log(view.view);
  return (
    <div className={"cards " + (view.view === "Squared" ? "" : "rows")}>
      {view.view === "Squared" &&
        cards.map((card: ICardItem) => {
          //   console.log(card);
          return (
            <div
              className="card-item"
              key={card._id}
              onClick={() => {
                history.push(`/${category}/${card._id}`);
              }}
            >
              <div className="card-item__state _yellow">
                <span>New</span>
              </div>
              <img src={require("./../../images/cards/thruster.png")} alt="" />
              <div className="card-info">
                <div className="card-info__title">{card.title}</div>
                <div className="card-info__prices">
                  <div className="card-info__price">
                    €
                    {card.newPrice.toLocaleString("en", {
                      useGrouping: false,
                      minimumFractionDigits: 2,
                    })}
                  </div>
                  <div className="card-info__oldPrice">
                    €
                    {card.oldPrice.toLocaleString("en", {
                      useGrouping: false,
                      minimumFractionDigits: 2,
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      {view.view === "Rows" &&
        cards.map((card: ICardItem) => {
          return (
            <div
              className="card-item _row"
              key={card._id}
              onClick={() => {
                history.push(`/${category}/${card._id}`);
              }}
            >
              <div className="card-item__state _yellow">
                <span>New</span>
              </div>
              <img src={require("./../../images/cards/thruster.png")} alt="" />
              <div className="card-info">
                <div className="card-info__title _title">{card.title}</div>
                <div className="card-info__description">{card.overview}</div>
                <div className="card-info__prices _prices">
                  <div className="card-info__price">
                    €
                    {card.newPrice.toLocaleString("en", {
                      useGrouping: false,
                      minimumFractionDigits: 2,
                    })}
                  </div>
                  <div className="card-info__oldPrice">
                    €
                    {card.oldPrice.toLocaleString("en", {
                      useGrouping: false,
                      minimumFractionDigits: 2,
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default withRouter(Cards);
