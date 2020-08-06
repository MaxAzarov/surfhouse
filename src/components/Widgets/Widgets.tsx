import React, { useState } from "react";
import "./Widgets.scss";
import { Link } from "react-router-dom";

const Widgets = () => {
  const [tags] = useState<string[]>([
    "Kitesuft",
    "Super",
    "Duper",
    "Theme",
    "Men",
    "Women",
    "Best",
    "Accessories",
    "Men",
    "Apparel",
    "Responsiv",
  ]);
  return (
    <div className="widgets">
      <p>Tags Widget</p>
      <div className="widgets__items">
        <ul>
          {tags.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
      <div className="all__widgets">
        <Link to="/tags" style={{ textDecoration: "none" }}>
          <span>view all tags →</span>
        </Link>
      </div>
    </div>
  );
};
export default Widgets;
