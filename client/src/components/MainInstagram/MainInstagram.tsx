import React from "react";
import Social from "../Social/Social";
import "./MainInstagram.scss";

export default function MainInstagram() {
  return (
    <div className="main-preview__instagram">
      <div className="instagram-title">Instagram feed: #surfhouse</div>
      <div className="main-preview__moments">
        <img src={require("./../../images/instagram/1.png")} alt="" />
        <img src={require("./../../images/instagram/2.png")} alt="" />
        <img src={require("./../../images/instagram/3.png")} alt="" />
        <img src={require("./../../images/instagram/4.png")} alt="" />
        <img src={require("./../../images/instagram/5.png")} alt="" />
        <img src={require("./../../images/instagram/6.png")} alt="" />
      </div>
      <Social></Social>
    </div>
  );
}
