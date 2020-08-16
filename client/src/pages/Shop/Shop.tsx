import React, { useEffect, useState } from "react";

import Menu from "../../components/Menu/Menu";
import Widgets from "../../components/Widgets/Widgets";
import Navigation from "../../components/Navigation/Navigation";
import Cards from "../../components/Cards/Cards";
import ShopSorting from "../../containers/ShopSorting/ShopSorting";
import Social from "../../components/Social/Social";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { ICardItem } from "./../../../../interfaces/card";
import { useDispatch } from "react-redux";
import { setCardsCount } from "../../actions/basket";
type Category = {
  category: string;
};
const Shop = (props: RouteComponentProps<Category>) => {
  const [cards, setCards] = useState<ICardItem[]>();
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchCards() {
      const response = await fetch(`/api/cards${props.location.search}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ category: props.match.params.category }),
      });
      const { cards, count } = await response.json();
      setCards(cards);
      dispatch(setCardsCount(count));
    }
    fetchCards();
  }, [props.match.params.category, props.location.search, dispatch]);
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
            <ShopSorting {...props}></ShopSorting>
            {cards && (
              <Cards
                cards={cards}
                category={props.match.params.category}
              ></Cards>
            )}
          </div>
        </div>
        <Social></Social>
      </div>
    </section>
  );
};
export default withRouter(Shop);
