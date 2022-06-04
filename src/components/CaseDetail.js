import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import topR from "../assets/caseP1.png";
import bottomL from "../assets/caseP2.png";

import "./case.css";
const CaseDetail = () => {
  const location = useLocation();

  return (
    <div>
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 30,
          width: "10%",
          height: "20%",
        }}
      >
        <img
          src={topR}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
            margin: 0,
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "10%",
        }}
      >
        <img
          src={bottomL}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
            margin: 0,
          }}
        />
      </div>
      <div className="case_container">
        <div className="image">
          <img
            src={location.state.img}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className="text">
          <div style={{ lineHeight: "0.5", marginBottom: "2%" }}>
            <h1 style={{ color: "white", fontWeight: "900" }}>
              Case Study: {location.state.heading}
            </h1>
            <p style={{ color: "white", fontSize: "large" }}>
              {location.state.subHead}
            </p>
          </div>
          <div className="line"></div>
          <p style={{ color: "white" }}>{location.state.para1}</p>
          <p style={{ color: "white" }}>{location.state.para2}</p>
          <p style={{ color: "white" }}>{location.state.para3}</p>
          <button className="behance_btn">View full on Behance</button>
        </div>
      </div>
    </div>
  );
};

export default CaseDetail;
