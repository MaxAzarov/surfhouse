import React from "react";

import Menu from "../../components/Menu/Menu";
import Navigation from "../../components/Navigation/Navigation";
import PurchaseProcess from "../../components/PurchaseProcess/PurchaseProcess";
import Propositions from "../../components/Propositions/Propositions";
import BasketItems from "../../containers/Basket/Basket";
const Cart: React.FC = () => {
  return (
    <section className="container">
      <div className="container-wrapper _above">
        <div className="container-content">
          <aside className="container-content__leftbar">
            <Menu></Menu>
            <img src={require("./../../images/mainPreview/home.jpg")} alt="" />
          </aside>
          <div className="container-content__main">
            <main>
              <Navigation></Navigation>
              <PurchaseProcess></PurchaseProcess>
              <BasketItems></BasketItems>
            </main>
            <Propositions></Propositions>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
