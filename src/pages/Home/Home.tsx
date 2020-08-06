import React from "react";

import Menu from "../../components/Menu/Menu";
import Widgets from "../../components/Widgets/Widgets";
import Articles from "../../components/Articles/Articles";
import Brands from "../../components/Brands/Brands";
import MainInstagram from "../../components/MainInstagram/MainInstagram";
import HomeCards from "../../components/HomeCards/HomeCards";
export default function Home() {
  return (
    <section className="container">
      <div className="container-wrapper _above">
        <div className="container-content">
          <aside className="container-content__leftbar">
            <Menu></Menu>
            <img src={require("./../../images/mainPreview/home.jpg")} alt="" />
            <Widgets></Widgets>
            <Articles></Articles>
          </aside>
          <div className="container-content__main">
            <HomeCards></HomeCards>
          </div>
        </div>
        <Brands></Brands>
        <MainInstagram></MainInstagram>
      </div>
    </section>
  );
}
