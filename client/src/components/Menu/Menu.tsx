import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import { useSelector } from "react-redux";

import "./Menu.scss";
import { AppState } from "../../reducers/rootReducer";

interface ILink {
  link: string;
  to: string;
}

const Menu = () => {
  const [links] = useState<ILink[]>([
    { link: "cart", to: "/cart" },
    { link: "register", to: "/register" },
    { link: "apparel", to: "/shop/apparel?limit=2&skip=0&price=1" },
    { link: "surf Apparel", to: "/shop/surfapparel?limit=2&skip=0&price=1" },
    { link: "windsurf", to: "/shop/windsurfing?limit=2&skip=0&price=1" },
    { link: "kitesurf", to: "/shop/kitesurfing?limit=2&skip=0&price=1" },
    { link: "accessories", to: "/shop/accessories?limit=2&skip=0&price=1" },
  ]);

  const isOpen = useSelector<AppState, boolean>((state) => state.user.menu);

  const menu = classnames({
    menu: true,
    "menu-active": isOpen,
  });

  return (
    <div className={menu}>
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
  );
};
export default Menu;
