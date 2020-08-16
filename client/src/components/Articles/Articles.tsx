import React from "react";
import "./Articles.scss";
import { Link } from "react-router-dom";

const Articles: React.FC = () => {
  return (
    <div className="articles">
      <p className="articles__title">Articles Experts</p>
      <p>
        LG Spectrum review Verizon Droid Xyboard 8.2 and 10.1 review Mac mini
        review (mid 2011) Wacom Inkling review Sonos Play:3 review HTC Radar 4G
        review Canon PowerShot S100 Apple iMac{" "}
      </p>
      <p className="acticles__all">
        <Link to="/articles" style={{ color: "#000", textDecoration: "none" }}>
          view all →
        </Link>
      </p>
    </div>
  );
};

export default Articles;
