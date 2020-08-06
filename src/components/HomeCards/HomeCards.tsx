import React from "react";
import Cards from "../Cards/Cards";
import "./HomeCards.scss";

export default function HomeCards() {
  return (
    <>
      <div className="new-products">
        <p>New products</p>
        <Cards></Cards>
      </div>

      <div className="top-products">
        <p>Top Products</p>
        <Cards></Cards>
      </div>

      <div className="sale-products">
        <p>Sale Products</p>
        <Cards></Cards>
      </div>
    </>
  );
}
