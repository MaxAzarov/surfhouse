import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useQuery } from "@apollo/client";
import { withRouter, RouteComponentProps } from "react-router-dom";

import Menu from "../../components/Menu/Menu";
import Widgets from "../../components/Widgets/Widgets";
import Navigation from "../../components/Navigation/Navigation";
import Cards from "../../components/Cards/Cards";
import ShopSorting from "../../containers/ShopSorting/ShopSorting";
import Social from "../../components/Social/Social";
import { ShopSortingQuery } from "./../../graphql/Query/ShopSorting";
import Spinner from "../../components/Spinner/Spinner";

type Category = {
  category: string;
};
const Shop = (props: RouteComponentProps<Category>) => {
  const { limit, price, search, skip } = queryString.parse(
    props.location.search
  );
  const [category, setCategory] = useState<string>(
    props.match.params.category.toString()
  );
  const { loading, error, data } = useQuery(ShopSortingQuery, {
    variables: {
      category: category,
      limit: Number(limit) | 2,
      price: Number(price) | 1,
      search,
      skip: Number(skip) | 0,
    },
  });

  useEffect(() => {
    setCategory(props.match.params.category);
  }, [props.match.params.category]);
  if (loading) {
    return <Spinner></Spinner>;
  }
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
            <ShopSorting
              {...props}
              countCards={data && data.ShopSorting.count}
            ></ShopSorting>
            {error && <div>error</div>}
            {data && (
              <Cards
                cards={data.ShopSorting.cards}
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
