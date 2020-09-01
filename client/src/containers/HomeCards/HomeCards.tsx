import React from "react";
import { useQuery } from "@apollo/client";

import "./HomeCards.scss";
import Cards from "./../../components/Cards/Cards";
import Spinner from "../../components/Spinner/Spinner";
import { newCardsQuery } from "../../graphql/Query/NewCards";
import { saleCardsQuery } from "../../graphql/Query/SaleCards";
import { topCardsQuery } from "../../graphql/Query/TopCards";

const HomeCards: React.FC = () => {
  const { loading: loadingNew, error: errorNew, data: newCards } = useQuery(
    newCardsQuery
  );
  const { loading: loadingSale, error: errorSale, data: saleCards } = useQuery(
    saleCardsQuery
  );

  const { loading: loadingTop, error: errorTop, data: topCards } = useQuery(
    topCardsQuery
  );

  if (errorNew || errorSale || errorTop) {
    return <div>Error!</div>;
  }

  return (
    <>
      <div className="new-products">
        <p>New products</p>
        {newCards && <Cards cards={newCards.getNewCards}></Cards>}
        {loadingNew && <Spinner></Spinner>}
      </div>

      <div className="top-products">
        <p>Top Products</p>
        {topCards && <Cards cards={topCards.getTopCards}></Cards>}
        {loadingTop && <Spinner></Spinner>}
      </div>

      <div className="sale-products">
        <p>Sale Products</p>
        {saleCards && <Cards cards={saleCards.getSaleCards}></Cards>}
        {loadingSale && <Spinner></Spinner>}
      </div>
    </>
  );
};
export default HomeCards;
