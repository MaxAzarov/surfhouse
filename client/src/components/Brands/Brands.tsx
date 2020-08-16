import React from "react";
import "./Brands.scss";
import { useLocation } from "react-router-dom";
const Brands: React.FC = () => {
  const location = useLocation();
  return (
    <div className="main-preview__brands">
      {location.pathname !== "/register" && (
        <>
          <img src={require("./../../images/brands/element.png")} alt="" />
        </>
      )}
      <img src={require("./../../images/brands/oneill.png")} alt="" />

      <img src={require("./../../images/brands/oakley.jpeg")} alt="" />
      <img src={require("./../../images/brands/quiksilver.png")} alt="" />
      <img src={require("./../../images/brands/reef.jpg")} alt="" />
    </div>
  );
};
export default Brands;
