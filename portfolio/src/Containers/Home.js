import React from "react";
import "../Style/Container/Home.scss";
import lump from "../Assest/lump.jpg";
// import lump2 from "../Assest/blog-pierre.2.jpg";
const Home = () => {
  return (
    <div className="home">
      <div className="imgBackground">
        <img src={lump} alt="lump" />
      </div>
    </div>
  );
};

export default Home;
