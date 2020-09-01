import React from "react";
import { useQuery } from "@apollo/client";

import "./Propositions.scss";
import Spinner from "../../components/Spinner/Spinner";
import Cards from "../../components/Cards/Cards";
import { GetLikedCards } from "../../graphql/Query/LikedCards";

const Propositions = () => {
  const { loading, error, data } = useQuery(GetLikedCards);
  if (loading || !data) {
    return <Spinner></Spinner>;
  }
  if (error) {
    return <div>No propositions for you!</div>;
  }
  return (
    <div className="propositions">
      <p>You might also like</p>
      <Cards cards={data.GetLikedCards}></Cards>
    </div>
  );
};

export default Propositions;
