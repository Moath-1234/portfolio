import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Containers/Home";
import About from "./Containers/About";
import Nav from "./Components/Navbar";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
};

export default Router;
