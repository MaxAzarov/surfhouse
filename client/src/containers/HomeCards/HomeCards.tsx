import React, { useEffect, useCallback, useState } from "react";
import "./HomeCards.scss";
import Cards from "./../../components/Cards/Cards";
import { ICardItem } from "../../../../interfaces/card";
import Spinner from "../../components/Spinner/Spinner";
interface Props {}
const HomeCards: React.FC<Props> = () => {
  const [newProducts, setNewProducts] = useState<ICardItem[]>();
  const [saleProducts, setSaleProducts] = useState<ICardItem[]>();
  const [topProducts, setTopProducts] = useState<ICardItem[]>();

  const getCards = useCallback(async () => {
    let response = await fetch("api/cards/new");
    const data = await response.json();
    setNewProducts(data.cards);
  }, []);

  const getSaleCards = useCallback(async () => {
    let response = await fetch("api/cards/sale");
    const data = await response.json();
    setSaleProducts(data.cards);
  }, []);

  const getTop = useCallback(async () => {
    let response = await fetch("api/cards/top");
    const data = await response.json();
    console.log(data.cards);
    setTopProducts(data.cards);
  }, []);

  useEffect(() => {
    getCards();
    getSaleCards();
    getTop();
  }, [getCards, getSaleCards, getTop]);
  return (
    <>
      <div className="new-products">
        <p>New products</p>
        {newProducts ? (
          <Cards cards={newProducts}></Cards>
        ) : (
          <Spinner></Spinner>
        )}
      </div>

      <div className="top-products">
        <p>Top Products</p>
        {topProducts ? (
          <Cards cards={topProducts}></Cards>
        ) : (
          <Spinner></Spinner>
        )}
      </div>

      <div className="sale-products">
        <p>Sale Products</p>
        {saleProducts ? (
          <Cards cards={saleProducts}></Cards>
        ) : (
          <Spinner></Spinner>
        )}
      </div>
    </>
  );
};
export default HomeCards;
