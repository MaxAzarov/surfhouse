import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";

import "./App.scss";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import CardItem from "./pages/CardItem/CardItem";
import Shop from "./pages/Shop/Shop";
import Header from "./containers/Header/Header";
import WishList from "./pages/WishList/WishList";
import { isAuth } from "./actions/user";
import { FetchBasketCards } from "./graphql/Query/FetchBasketCards";
import Spinner from "./components/Spinner/Spinner";

const App: React.FC = () => {
  const dispatch = useDispatch();
  dispatch(isAuth());
  const { loading, error } = useQuery(FetchBasketCards);
  if (error) {
  }
  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/checkout" component={Checkout} exact></Route>
        <Route path="/register" component={Register} exact></Route>
        <Route path="/shop/:category" component={Shop} exact></Route>
        <Route path="/cart" component={Cart} exact></Route>
        <Route path="/wishlist" component={WishList} exact></Route>
        <Route path="/:category/:id" component={CardItem} exact></Route>
        <Route path="/" component={Home} exact></Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
};
export default App;
