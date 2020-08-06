import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.scss";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import CardItem from "./pages/CardItem/CardItem";
import Shop from "./pages/Shop/Shop";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/checkout" component={Checkout} exact></Route>
        <Route path="/contact" component={Contact} exact></Route>
        <Route path="/shop" component={Shop} exact></Route>
        <Route path="/cart" component={Cart} exact></Route>
        <Route path="/:id" component={CardItem} exact></Route>
        <Route path="/" component={Home} exact></Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
};
export default App;
