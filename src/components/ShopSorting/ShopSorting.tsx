import React from "react";
import "./ShopSorting.scss";

export default function ShopSorting() {
  return (
    <div className="shop-main__sort">
      <div className="sort-position">
        <label htmlFor="">
          Sort By
          <select name="" id="">
            <option value="">Option</option>
            <option value="">Option</option>
          </select>
        </label>
      </div>
      <div className="sort-view">
        <p>view as:</p>
        <div className="sort-view__squared">
          <span></span>
          <span></span>
        </div>
        <div className="sort-view__lines">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="sort-view__count">
        <label htmlFor="">
          Show
          <select name="" id="">
            <option value="">6</option>
            <option value="">9</option>
            <option value="">12</option>
          </select>
          Per page
        </label>
      </div>
      <div className="sort-view__page">
        <p>Page:</p>
        <div className="page-arrow left"></div>
        <div className="page active">1</div>
        <div className="page ">2</div>
        <div className="page-arrow right"></div>
      </div>
    </div>
  );
}
