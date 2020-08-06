import React from "react";
import "./Cards.scss";

export default function Cards() {
  return (
    <div className="cards">
      <div className="card-item">
        {/* <div className="card-item__state">
          <span>New</span>
        </div> */}
        <div className="card-item__state _yellow">
          <span>New</span>
        </div>
        <img src={require("./../../images/cards/thruster.png")} alt="" />
        <div className="card-info">
          <div className="card-info__title">Single Thruster 2014</div>
          <div className="card-info__prices">
            <div className="card-info__price">€.865.00</div>
            <div className="card-info__oldPrice">€.1,270.15</div>
          </div>
        </div>
      </div>

      <div className="card-item">
        {/* <div className="card-item__state">
          <span>New</span>
        </div> */}
        <div className="card-item__state _yellow">
          <span>New</span>
        </div>
        <img src={require("./../../images/cards/thruster.png")} alt="" />
        <div className="card-info">
          <div className="card-info__title">Single Thruster 2014</div>
          <div className="card-info__prices">
            <div className="card-info__price">€.865.00</div>
            <div className="card-info__oldPrice">€.1,270.15</div>
          </div>
        </div>
      </div>

      <div className="card-item">
        {/* <div className="card-item__state">
          <span>New</span>
        </div> */}
        <div className="card-item__state _yellow">
          <span>New</span>
        </div>
        <img src={require("./../../images/cards/thruster.png")} alt="" />
        <div className="card-info">
          <div className="card-info__title">Single Thruster 2014</div>
          <div className="card-info__prices">
            <div className="card-info__price">€.865.00</div>
            <div className="card-info__oldPrice">€.1,270.15</div>
          </div>
        </div>
      </div>
    </div>
  );
}
