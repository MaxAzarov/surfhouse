import React, { useState } from "react";
import "./Menu.scss";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
interface ILink {
  link: string;
  to: string;
}
type Props = {
  id: string;
};
const Menu = ({ match }: RouteComponentProps<Props>) => {
  const location = useLocation();
  const [links] = useState<ILink[]>([
    { link: "about", to: "/about" },
    { link: "apparel", to: "/apparel" },
    { link: "surf apparel", to: "/surfApparel" },
    { link: "windsurf", to: "/windsurf" },
    { link: "kitesurf", to: "/kitesurf" },
    { link: "accessories", to: "/accessories" },
    { link: "sale", to: "/sale" },
    { link: "brands", to: "/brands" },
    { link: "blog", to: "/blog" },
    { link: "gadgets", to: "/gadgets" },
    { link: "contact", to: "/contact" },
  ]);

  const [categories] = useState<ILink[]>([
    { link: "men", to: "/men" },
    { link: "women", to: "/women" },
    { link: "kids", to: "/kids" },
    { link: "wetsuits", to: "/wetsuits" },
    { link: "outewear", to: "/outerwear" },
  ]);
  const [brands] = useState<ILink[]>([
    { link: "billabong", to: "/billabong" },
    { link: "element", to: "/element" },
    { link: "o'neill", to: "/oneill" },
    { link: "oakley", to: "/oakley" },
    { link: "reef", to: "/reef" },
    { link: "quicksilver", to: "/quicksilver" },
    { link: "ripcurl", to: "/ripcurl" },
    { link: "jackss", to: "/jackss" },
  ]);
  return (
    <>
      <div className="menu">
        <div className="menu__title">Menu</div>
        <ul>
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={item.to}
                >
                  {item.link}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {(location.pathname === "/cart" ||
        match.params.id ||
        location.pathname === "/shop") && (
        <>
          <div className="menu">
            <div className="menu__title">Category Options</div>
            <ul>
              {categories.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      style={{ textDecoration: "none", color: "#fff" }}
                      to={item.to}
                    >
                      {item.link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="menu">
            <div className="menu__title">Brand options</div>
            <ul>
              {brands.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      style={{ textDecoration: "none", color: "#fff" }}
                      to={item.to}
                    >
                      {item.link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </>
  );
};
export default withRouter(Menu);
