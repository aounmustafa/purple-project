import React from "react";
import "./about.css";
import puzzle from "../assets/Unionpuzzle.png";
import behance from "../assets/behance.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";

const About = () => {
  const iconList = [
    { icon: instagram, link: "" },
    { icon: twitter, link: "" },
    { icon: linkedin, link: "" },
    { icon: behance, link: "" },
  ];

  return (
    <div className="about_container">
      <div className="left_side">
        <div className="puzzle">
          <img
            src={puzzle}
            alt="puzzle"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="right_side">
        <h1 style={{ color: "white", marginBottom: 0 }}>
          Hi! Here is a little Samary
        </h1>
        <h4 style={{ color: "white", marginBottom: 0, marginTop: 0 }}>
          I am an Interaction Designer and Illustrator
        </h4>
        <p style={{ color: "white" }}>
          <span style={{ color: "#D4C0FF" }}>Designer </span> and{" "}
          <span style={{ color: "#D368C5" }}>illustrator </span>in pursuit of
          creating{" "}
          <span style={{ color: "#D4C0FF" }}>meaningful experiences. </span>
          Freelancer, design student and painter of adorable animals.{" "}
          <span style={{ color: "#D368C5" }}> Excellent at multi-tasking </span>
          and identifying actors in movies and where you might have seen them
          before.
        </p>
        <p style={{ color: "#D4C0FF", width: "55%" }}>
          Need to <span style={{ color: "#D368C5" }}>connect</span> with a
          creative to bring your vision to life? Want to
          <span style={{ color: "#D368C5" }}> reach </span>out for a job or
          project?
        </p>
        <p style={{ color: "#D4C0FF" }}>
          Contact me on{" "}
          <span style={{ color: "#D368C5" }}>
            desertnightproductions@gmail.com
          </span>
        </p>
        <div className="icons">
          <ul className="row">
            {iconList.map((element, key) => (
              <li className="item">
                <img style={{ width: "40px" }} src={element.icon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
