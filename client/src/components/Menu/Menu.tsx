import React, { useState } from "react";
import "./Menu.scss";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
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
    { link: "Cart", to: "/cart" },
    { link: "register", to: "/register" },
    { link: "apparel", to: "/shop/apparel?limit=2&skip=0&price=1" },
    { link: "surf apparel", to: "/shop/surfapparel?limit=2&skip=0&price=1" },
    { link: "windsurf", to: "/shop/windsurfing?limit=2&skip=0&price=1" },
    { link: "kitesurf", to: "/shop/kitesurfing?limit=2&skip=0&price=1" },
    { link: "accessories", to: "/shop/accessories?limit=2&skip=0&price=1" },
    { link: "sale", to: "/sale" },
    { link: "brands", to: "/brands" },
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
              <NavLink
                style={{ textDecoration: "none", color: "#fff" }}
                to={item.to}
                activeClassName="active"
                key={index}
              >
                <li key={index}>{item.link}</li>
              </NavLink>
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
                    <NavLink
                      style={{ textDecoration: "none", color: "#fff" }}
                      to={item.to}
                      activeClassName="active"
                      key={index}
                    >
                      {item.link}
                    </NavLink>
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
                    <NavLink
                      style={{ textDecoration: "none", color: "#fff" }}
                      activeClassName="active"
                      to={item.to}
                      key={index}
                    >
                      {item.link}
                    </NavLink>
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
