import React from "react";
import Nav from "./Nav";
import "./container.css";
const Container = () => {
  return (
    <div className="container">
      <div className="navbar">
        <Nav />
      </div>
      <div className="outlet"></div>
    </div>
  );
};

export default Container;
