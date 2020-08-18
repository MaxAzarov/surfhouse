import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./App.scss";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import CardItem from "./pages/CardItem/CardItem";
import Shop from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import WishList from "./pages/WishList/WishList";
import { isAuth } from "./actions/user";
import { AppState } from "./reducers/rootReducer";
import { FetchBasketCards } from "./actions/basket";
import { FetchWishlistCards } from "./actions/wishlist";

const App: React.FC = () => {
  const token = useSelector<AppState, string>((state) => state.user.token);
  const dispatch = useDispatch();
  dispatch(isAuth());
  if (token) {
    dispatch(FetchBasketCards(token));
    dispatch(FetchWishlistCards(token));
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
