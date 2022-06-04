import React from "react";
import "./Illustration.css";
import illustration_icon_filled from "../Assets/illustraion_icon_filled.png";
import illustration_icon_outlined from "../Assets/illustration_icon_outlined.png";
import two from "../Assets/2.png";
import five from "../Assets/5.png";
import nine from "../Assets/9.png";
import eight from "../Assets/8.png";
import one from "../Assets/1.png";
import oneA from "../Assets/1.1.png";
import oneB from "../Assets/1.2.png";
import oneC from "../Assets/1.3.png";
import four from "../Assets/4.png";
import seven from "../Assets/7.png";
import sevenA from "../Assets/7.1.png";
import sevenB from "../Assets/7.2.png";
import sevenC from "../Assets/7.3.png";
import thirteen from "../Assets/13.png";
import eleven from "../Assets/11.png";
import three from "../Assets/3.png";
import threeA from "../Assets/3.1.png";
import threeB from "../Assets/3.2.png";
import threeC from "../Assets/3.3.png";
import six from "../Assets/6.png";
import sixA from "../Assets/6.1.png";
import sixB from "../Assets/6.2.png";
import sixC from "../Assets/6.3.png";
import ten from "../Assets/10.png";
import tenA from "../Assets/10.1.png";
import tenB from "../Assets/10.2.png";
import tenC from "../Assets/10.3.png";
import fourteen from "../Assets/14.png";
import twelve from "../Assets/12.png";

import IllustrationPuzzle from "./IllustrationPuzzle";
import IllustrationLand from "./IllustrationLand";
import IllustrationSketch from "./IllustrationSketch";

function Illustraion() {
  const [type, setType] = React.useState("char");
  const changeType = (t) => {
    setType(t);
  };
  return (
    <div className="illustration_container">
      <div className="types_container">
        <div className="types">
          <button onClick={() => changeType("char")}>
            <p
              style={type == "char" ? { color: "#D368C5" } : { color: "black" }}
            >
              <span>
                <img
                  className="image"
                  src={
                    type == "char"
                      ? illustration_icon_filled
                      : illustration_icon_outlined
                  }
                  alt=""
                />
              </span>
              Character Design
            </p>
          </button>
          <button onClick={() => changeType("land")}>
            <p
              style={type == "land" ? { color: "#D368C5" } : { color: "black" }}
            >
              <span>
                <img
                  className="image"
                  src={
                    type == "land"
                      ? illustration_icon_filled
                      : illustration_icon_outlined
                  }
                  alt=""
                />
              </span>
              Landscapes
            </p>
          </button>
          <button onClick={() => changeType("sketch")}>
            <p
              style={
                type == "sketch" ? { color: "#D368C5" } : { color: "black" }
              }
            >
              <span>
                <img
                  className="image"
                  src={
                    type == "sketch"
                      ? illustration_icon_filled
                      : illustration_icon_outlined
                  }
                  alt=""
                />
              </span>
              Sketchbook
            </p>
          </button>
        </div>
      </div>
      {type === "char" ? (
        <div className="col_container">
          <div className="col_1">
            <IllustrationPuzzle one={one} oneA={oneA} oneB={oneB} oneC={oneC} />
            <img
              src={four}
              alt=""
              width="100%"
              // height="100%"
              style={{ objectFit: "contain", marginBottom: "7%" }}
            />
            <IllustrationPuzzle
              one={seven}
              oneA={sevenA}
              oneB={sevenB}
              oneC={sevenC}
            />
            <img src={eleven} alt="" width="100%" />
            <img
              src={thirteen}
              alt=""
              width="100%"
              style={{ marginTop: "7%" }}
            />
          </div>
          <div className="col_2">
            <img
              src={two}
              alt=""
              width="100%"
              // height="100%"
              className="col2_img"
            />
            <img
              src={five}
              alt=""
              width="100%"
              // height="100%"
              style={{ marginTop: "7%", marginBottom: "7%" }}
            />
            <img
              src={eight}
              alt=""
              width="100%"
              // height="100%"
            />
            <img
              src={nine}
              alt=""
              width="100%"
              height="100%"
              className="col2_img"
              style={{ marginTop: "-37%" }}
            />
          </div>
          <div className="col_3">
            <div>
              <div style={{ display: "flex", marginBottom: "7%" }}>
                <img
                  src={threeA}
                  alt=""
                  width="100%"
                  height="100%"
                  style={{ objectFit: "contain", marginRight: "4%" }}
                />
                <img
                  src={threeB}
                  alt=""
                  width="100%"
                  height="100%"
                  style={{ objectFit: "contain", marginRight: "4%" }}
                />
                <img
                  src={threeC}
                  alt=""
                  width="100%"
                  height="100%"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <img
                src={three}
                alt=""
                width="100%"
                height="100%"
                style={{ objectFit: "contain", marginBottom: "7%" }}
              />
            </div>
            <IllustrationPuzzle one={six} oneA={sixA} oneB={sixB} oneC={sixC} />

            <IllustrationPuzzle one={ten} oneA={tenA} oneB={tenB} oneC={tenC} />
            <img
              src={twelve}
              alt=""
              width="100%"
              // height="100%"
              style={{
                objectFit: "contain",
                marginBottom: "7%",
              }}
            />
            <img
              src={fourteen}
              alt=""
              width="100%"
              // height="100%"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      ) : type === "sketch" ? (
        <IllustrationSketch />
      ) : type === "land" ? (
        <IllustrationLand />
      ) : null}
    </div>
  );
}

export default Illustraion;
