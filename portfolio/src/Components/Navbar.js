import React from "react";
import { Link } from "react-router-dom";
import "../Style/Components/Nav.scss";
const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        Moath <span>Al-Zaol</span>
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
