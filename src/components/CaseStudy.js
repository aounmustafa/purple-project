import React from "react";
import "./case.css";
import { useNavigate } from "react-router";
import { salyaniData, tokriData } from "./caseData";
import puzzle4 from "../assets/puzzle4.png";
import puzzle2 from "../assets/puzzle2.png";
import puzzleJoin from "../assets/puzzleJoin.PNG";
import tokrimockup from "../assets/tokrimockup.png";
import salyani from "../assets/salyani.png";

const CaseStudy = () => {
  const navigate = useNavigate();
  return (
    <div className="bg">
      <img
        src={puzzle2}
        style={{
          width: "20%",
          height: "20%",
          objectFit: "contain",
          position: "absolute",
          top: "65%",
          left: "10%",
          zIndex: "-1",
        }}
      />

      <div
        style={{
          display: "flex",
          right: "0px",
          bottom: "0px",
          width: "20%",
          height: "20%",
          position: "absolute",
        }}
      >
        <img
          src={puzzleJoin}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
            margin: 0,
          }}
        />
      </div>
      <img
        src={puzzle4}
        style={{
          width: "20%",
          height: "20%",
          objectFit: "contain",
          position: "absolute",
          top: "20%",
          left: "50%",
          zIndex: "-1",
        }}
      />

      <div className="content">
        <div className="sal">
          <img
            src={salyani}
            style={{
              flex: "40%",
              objectFit: "contain",
              width: "80%",
              height: "80%",
            }}
          />
          <div className="card_in">
            <h2>Case Study: Saylani</h2>
            <p style={{ fontSize: "small" }}>
              Redesign of in-app donation process
            </p>
            <button
              className="sal_btn"
              onClick={() =>
                navigate(`/casestudy${salyaniData.heading}`, {
                  state: salyaniData,
                })
              }
            >
              Read more
            </button>
          </div>
        </div>
        <div className="tokri">
          <div className="card_in">
            <h2 style={{ textAlign: "right" }}>Case Study: Tokri</h2>
            <p style={{ fontSize: "small", textAlign: "right" }}>
              An original gifting website
            </p>
            <button
              className="tokri_btn"
              onClick={() =>
                navigate(`/casestudy${tokriData.heading}`, {
                  state: tokriData,
                })
              }
            >
              View project
            </button>
          </div>
          <img
            src={tokrimockup}
            style={{
              flex: "40%",
              objectFit: "contain",
              width: "80%",
              height: "80%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
