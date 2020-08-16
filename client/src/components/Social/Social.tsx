import React from "react";
import "./Social.scss";

export default function Social() {
  return (
    <div className="main-preview__social">
      <div className="social__facebook">
        <img src={require("./../../images/instagram/bgfacebook.png")} alt="" />
      </div>
      <div className="social__twitter">
        <img src={require("./../../images/instagram/bgtw.png")} alt="" />
      </div>
      <div className="social__pinterest">
        <img src={require("./../../images/instagram/bgpint.png")} alt="" />
      </div>
    </div>
  );
}
