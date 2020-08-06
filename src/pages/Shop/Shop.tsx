import React from "react";

import Menu from "../../components/Menu/Menu";
import Widgets from "../../components/Widgets/Widgets";
import Navigation from "../../components/Navigation/Navigation";
import Cards from "../../components/Cards/Cards";
import ShopSorting from "../../components/ShopSorting/ShopSorting";
import Social from "../../components/Social/Social";

export default function Shop() {
  return (
    <section className="container">
      <div className="container-wrapper">
        <div className="container-content">
          <aside className="container-content__leftbar">
            <Menu></Menu>
            <Widgets></Widgets>
            <img src={require("./../../images/mainPreview/home.jpg")} alt="" />
          </aside>
          <div className="container-content__main">
            <Navigation></Navigation>
            <ShopSorting></ShopSorting>
            <Cards></Cards>
            <Cards></Cards>
            <Cards></Cards>
            <ShopSorting></ShopSorting>
          </div>
        </div>
        <Social></Social>
      </div>
    </section>
  );
}
