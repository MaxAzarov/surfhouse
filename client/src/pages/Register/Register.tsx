import React from "react";

import Menu from "../../components/Menu/Menu";
import Brands from "../../components/Brands/Brands";
import Social from "../../components/Social/Social";
import Navigation from "../../components/Navigation/Navigation";
import ContactForm from "../../containers/Register/Register";

export default function Contact() {
  return (
    <section className="container">
      <div className="container-wrapper">
        <div className="container-content">
          <aside className="container-content__leftbar">
            <Menu></Menu>
            <img src={require("./../../images/mainPreview/home.jpg")} alt="" />
          </aside>
          <div className="container-content__main">
            <main>
              <Navigation></Navigation>
              <ContactForm></ContactForm>
            </main>
            <Brands></Brands>
          </div>
        </div>
        <Social></Social>
      </div>
    </section>
  );
}
