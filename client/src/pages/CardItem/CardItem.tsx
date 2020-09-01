import React from "react";

import Menu from "../../components/Menu/Menu";
import Articles from "../../components/Articles/Articles";
import Widgets from "../../components/Widgets/Widgets";
import Navigation from "../../components/Navigation/Navigation";
import Social from "../../components/Social/Social";
import CardItemContent from "../../containers/CardItemContent/CardItemContent";
import Propositions from "../../containers/Propositions/Propositions";

const CardItem: React.FC = () => {
  return (
    <section className="container">
      <div className="container-wrapper _above">
        <div className="container-content">
          <aside className="container-content__leftbar">
            <Menu></Menu>
            <Articles></Articles>
            <Widgets></Widgets>
          </aside>
          <div className="container-content__main">
            <Navigation></Navigation>
            <CardItemContent></CardItemContent>
            <Propositions></Propositions>
          </div>
        </div>
        <Social></Social>
      </div>
    </section>
  );
};

export default CardItem;
