import React from "react";
import "./nav.css";
import { useNavigate, useLocation } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const items = [
    { title: "About", link: "/" },
    { title: "UI/UX Design", link: "" },
    { title: "Illustration", link: "" },
    { title: "Case Study", link: "" },
  ];
  return (
    <div className="nav">
      <ul className="ul">
        {items.map((item, key) => {
          return (
            <li
              className="item"
              key={key}
              id={location.pathname === item.link ? "active" : ""}
              onClick={() => navigate(item.link)}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
