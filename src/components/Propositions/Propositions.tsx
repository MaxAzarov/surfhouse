import React from "react";
import "./Propositions.scss";
import Cards from "../Cards/Cards";
const Propositions = () => {
  return (
    <div className="propositions">
      <p>You might also like</p>
      <Cards></Cards>
      <p>Recently viewed</p>
      <Cards></Cards>
    </div>
  );
};

export default Propositions;
