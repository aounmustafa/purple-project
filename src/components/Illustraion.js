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
      <div className="row_container">
        <div className="row_1">s</div>
        <div className="row_2">
          <img
            src={two}
            alt=""
            width="100%"
            height="100%"
            style={{ objectFit: "contain" }}
          />
          <img
            src={five}
            alt=""
            width="100%"
            height="100%"
            style={{ objectFit: "contain" }}
          />
          <img
            src={eight}
            alt=""
            width="100%"
            height="100%"
            style={{ objectFit: "contain" }}
          />
          <img
            src={nine}
            alt=""
            width="100%"
            height="100%"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="row_3">c</div>
      </div>
    </div>
  );
}

export default Illustraion;
