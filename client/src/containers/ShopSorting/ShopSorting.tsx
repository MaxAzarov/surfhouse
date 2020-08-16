import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./ShopSorting.scss";
import { AppState } from "../../reducers/rootReducer";
import { IBasket } from "../../../../interfaces/basket";
import { setCardsView } from "../../actions/basket";

type PriceValues = -1 | 1;

const ShopSorting = (props: RouteComponentProps) => {
  const [amount, setAmount] = useState<number>(2);
  const [active, setActive] = useState<number>(1);
  const [skip, setSkip] = useState<number>(0);
  const [price, setPrice] = useState<PriceValues>(-1);
  const count: IBasket = useSelector<AppState, any>((state) => state.basket);
  const dispatch = useDispatch();
  useEffect(() => {
    props.history.push({ search: `?limit=${2}&skip=${skip}&price=${price}` });
  }, [props.history, skip, price]);
  return (
    <div className="shop-main__sort">
      <div className="sort-position">
        <label htmlFor="">
          Sort By
          <select
            name=""
            id=""
            onChange={(e) => {
              if (e.target.value === "Price,high to low") {
                setPrice(-1);
                return props.history.push({
                  search: `?limit=${2}&skip=${skip}&price=${-1}`,
                });
              }
              setPrice(1);
              props.history.push({
                search: `?limit=${2}&skip=${skip}&price=${1}`,
              });
            }}
          >
            <option value="Price,high to low">Price,high to low</option>
            <option value="Price,low to high">Price,to to high</option>
          </select>
        </label>
      </div>
      <div className="sort-view">
        <p>view as:</p>
        <div
          className={
            "sort-view__squared " + (count.view === "Squared" ? "active" : "")
          }
          onClick={() => dispatch(setCardsView("Squared"))}
        >
          <div></div>
          <div></div>
        </div>
        <div
          className={
            "sort-view__lines " + (count.view === "Rows" ? "active" : "")
          }
          onClick={() => dispatch(setCardsView("Rows"))}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="sort-view__count">
        <label htmlFor="">
          Show
          <select
            name=""
            id=""
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              props.history.push({
                search: `?limit=${e.target.value}&skip=${0}&price=${price}`,
              });
              setAmount(+e.target.value);
            }}
          >
            <option value={2}>2</option>
            <option value={4}>4</option>
            <option value={6}>6</option>
          </select>
          Per page
        </label>
      </div>
      <div className="sort-view__page">
        <p>Page:</p>
        <div className="page-arrow left"></div>
        {count.cardsAmount &&
          amount &&
          [...Array(Math.ceil(count.cardsAmount / amount))].map((_, index) => (
            <div
              className={"page " + (active === index + 1 ? "active" : "")}
              onClick={() => {
                props.history.push({
                  search: `?limit=${amount}&skip=${
                    amount * index
                  }&price=${price}`,
                });
                setSkip(amount * index);
                setActive(index + 1);
              }}
            >
              {index + 1}
            </div>
          ))}

        <div className="page-arrow right"></div>
      </div>
    </div>
  );
};
export default ShopSorting;
