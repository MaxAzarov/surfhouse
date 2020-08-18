import React, { useState, useCallback, useEffect } from "react";
import { ICardItem } from "./../../../../interfaces/card";
import "./Propositions.scss";
import Spinner from "./../../components/Spinner/Spinner";
import Cards from "../Cards/Cards";
const Propositions = () => {
  const [likeCards, setLikeCards] = useState<ICardItem[]>();

  const getCards = useCallback(async () => {
    let response = await fetch("api/cards/like");
    const data = await response.json();
    setLikeCards(data.cards);
  }, []);

  useEffect(() => {
    getCards();
  }, [getCards]);
  return (
    <div className="propositions">
      <p>You might also like</p>
      {/* <Cards></Cards> */}
      {likeCards ? <Cards cards={likeCards}></Cards> : <Spinner></Spinner>}
    </div>
  );
};

export default Propositions;
