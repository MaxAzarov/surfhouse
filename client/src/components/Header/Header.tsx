import React from "react";
import { Link, useLocation, withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";

import "./Header.scss";
import logo from "./../../images/header/logo.png";
import facebook from "./../../images/header/facebook.png";
import twitter from "./../../images/header/twitter.png";
import youtube from "./../../images/header/youtube.png";
import pinterest from "./../../images/header/pinterest.png";
import instagram from "./../../images/header/insta.png";
import HeaderInfo from "./HeaderInfo";

type Props = {
  id: string;
};
const Header = (props: RouteComponentProps<Props>): JSX.Element => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/contact" && (
        <header className="header">
          <div className="header-container">
            <div className="header-top">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
              <ul>
                <li>
                  <img src={facebook} alt="facebook" />
                </li>
                <li>
                  <img src={twitter} alt="twitter" />
                </li>
                <li>
                  <img src={youtube} alt="youtube" />
                </li>
                <li>
                  <img src={pinterest} alt="pinterest" />
                </li>
                <li>
                  <img src={instagram} alt="instagram" />
                </li>
                <select name="" id="">
                  <option value="EN">EN</option>
                  <option value="UA">UA</option>
                </select>
              </ul>
            </div>
            {location.pathname === "/" && (
              <div className="header-content">
                <div className="header-left">
                  <HeaderInfo {...props}></HeaderInfo>
                </div>

                <div className="header-info">
                  <div className="header-info__left">
                    <div className="header-info__title">JP FUNRIDE 2020</div>
                    <div className="header-info__subtitle">
                      Super easy going freeride boards based on the X-Cite Ride
                      shape concept with additional control and super easy
                      jibing.
                    </div>
                    <button className="header-info__btn">Buy now</button>
                  </div>
                  <div className="header-info__right">
                    <div className="header-arrow__left"></div>
                    <div className="header-arrow__right"></div>
                  </div>
                </div>
              </div>
            )}

            {(location.pathname.startsWith("/shop") ||
              props.match.params.id) && (
              <>
                <div className="header-content">
                  <div className="header-left">
                    <HeaderInfo {...props}></HeaderInfo>
                  </div>
                </div>
              </>
            )}
          </div>
          {location.pathname === "/home" && (
            <div className="header__pages">
              <div className="header-page__item active"></div>
              <div className="header-page__item"></div>
              <div className="header-page__item"></div>
            </div>
          )}
        </header>
      )}

      {location.pathname === "/contact" && (
        <header className="header-contact">
          <div className="header-contact__container">
            <img src={logo} alt="" />
            <ul>
              <li>
                <img src={facebook} alt="" />
              </li>
              <li>
                <img src={twitter} alt="" />
              </li>
              <li>
                <img src={youtube} alt="" />
              </li>
              <li>
                <img src={pinterest} alt="" />
              </li>
              <li>
                <img src={instagram} alt="" />
              </li>
              <select name="" id="">
                <option value="EN">EN</option>
                <option value="UA">UA</option>
              </select>
            </ul>
          </div>
        </header>
      )}
    </>
  );
};
export default withRouter(Header);
