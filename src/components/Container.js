import React from "react";
import Nav from "./Nav";
import "./container.css";
import { Outlet } from "react-router-dom";
const Container = () => {
  return (
    <div className="container">
      <div className="navbar">
        <Nav />
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Container;
