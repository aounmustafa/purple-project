import React from "react";
import "./nav.css";
import { useNavigate, useLocation } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const items = [
    { title: "About", link: "/about" },
    { title: "UI/UX Design", link: "/uiux" },
    { title: "Illustration", link: "/f" },
    { title: "Case Study", link: "/casestudy" },
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
