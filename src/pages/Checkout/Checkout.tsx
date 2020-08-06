import React from "react";
import Menu from "../../components/Menu/Menu";
import Articles from "../../components/Articles/Articles";
import Navigation from "../../components/Navigation/Navigation";
import PurchaseProcess from "../../components/PurchaseProcess/PurchaseProcess";
import Social from "../../components/Social/Social";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

const Checkout: React.FC = () => {
  return (
    <section className="container">
      <div className="container-wrapper _above">
        <div className="container-content">
          <aside className="container-content__leftbar">
            <Menu></Menu>
            <img src={require("./../../images/mainPreview/home.jpg")} alt="" />
            <Articles></Articles>
          </aside>
          <div className="container-content__main">
            <Navigation></Navigation>
            <PurchaseProcess></PurchaseProcess>
            <CheckoutForm></CheckoutForm>
          </div>
        </div>
        <Social></Social>
      </div>
    </section>
  );
};

export default Checkout;
