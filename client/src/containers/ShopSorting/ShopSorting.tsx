import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./ShopSorting.scss";
import { AppState } from "../../reducers/rootReducer";
import { IBasket } from "../../../../interfaces/basket";
import {
  setCardsView,
  setAmount,
  setSkip,
  setPrice,
} from "../../actions/basket";

interface IProps extends RouteComponentProps {
  countCards: number;
}

const ShopSorting = (props: IProps) => {
  const [active, setActive] = useState<number>(1);
  const { skip, search, price, view, amount }: IBasket = useSelector<
    AppState,
    any
  >((state) => state.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    props.history.push({
      search: `?limit=${2}&skip=${skip}&price=${price}&search=${search}`,
    });
  }, [props.history, skip, price, search]);
  return (
    <div className="shop-main__sort">
      <div className="sort-position">
        <label htmlFor="">
          Sort By
          <select
            name=""
            id=""
            onChange={(e) => {
              setActive(1);
              if (e.target.value === "Price,high to low") {
                dispatch(setPrice(-1));
                return props.history.push({
                  search: `?limit=${2}&skip=${skip}&price=${-1}&search=${search}`,
                });
              }
              dispatch(setPrice(1));
              props.history.push({
                search: `?limit=${2}&skip=${skip}&price=${1}&search=${search}`,
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
            "sort-view__squared " + (view === "Squared" ? "active" : "")
          }
          onClick={() => dispatch(setCardsView("Squared"))}
        >
          <div></div>
          <div></div>
        </div>
        <div
          className={"sort-view__lines " + (view === "Rows" ? "active" : "")}
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
                search: `?limit=${e.target.value}&skip=${skip}&price=${price}&search=${search}`,
              });
              dispatch(setAmount(+e.target.value));
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
        {props.countCards &&
          amount &&
          [...Array(Math.ceil(props.countCards / amount))].map((_, index) => (
            <div
              className={"page " + (active === index + 1 ? "active" : "")}
              key={index}
              onClick={() => {
                const skip = amount * index;
                props.history.push({
                  search: `?limit=${amount}&skip=${skip}&price=${price}&search=${search}`,
                });
                dispatch(setSkip(skip));
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
