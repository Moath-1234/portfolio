import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Components/Nav.scss";
import m from "../Assest/m.svg";

const Nav = () => {
  const [logo, setLogo] = useState(false);
  return (
    <div className="nav">
      <div className="logo">
        <div className="log">
          <img
            src={m}
            onMouseEnter={() => setLogo(true)}
            onMouseLeave={() => setLogo(false)}
            alt="he"
            style={{ fill: "blue" }}
          />
          <div className="rightLogo">
            <span
              style={logo ? { opacity: 1, marginLeft: "20px" } : { opacity: 0 }}
            >
              Moath Al-Zaol
            </span>
          </div>
        </div>
      </div>
      <div className="rightNav">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/">Skills</Link>
        </div>
        <div>
          <Link to="/">Portfolio</Link>
        </div>
        <div>
          <Link to="/">About </Link>
        </div>
        <div>
          <Link to="/">Countact</Link>
        </div>
      </div>
      <button className="cv">Download CV</button>
    </div>
  );
};
export default Nav;
