import React from "react";
import { useNavigate } from "react-router-dom";
import UnionLeft from "../assets/UnionLeft.png";
import puzzleRight from "../assets/puzzleRight.png";
import bottomPuzzle from "../assets/bottomPuzzle.PNG";
import illPuzzle from "../assets/illPuzzle.PNG";
import "./first.css";
const FirstPage = () => {
  const [animate, setAnimate] = React.useState(false);
  const navigate = useNavigate();
  const headStyle = {
    fontWeight: "400",
    color: "white",
    fontSize: "4vw",
    marginTop: "0px",
    marginBottom: "0px",
    fontFamily: "'Playfair Display', serif",
  };
  return (
    <div>
      <div className="first_bg">
        <img
          src={UnionLeft}
          style={{
            // animationName: "move",
            // animationDuration: "4s",
            // animationTimingFunction: "linear",
            position: "absolute",
            left: "0%",
            bottom: "0%",
            objectFit: "contain",
            width: "15%",
            height: "22%",
            margin: "0",
          }}
        />

        <img
          src={puzzleRight}
          style={{
            position: "absolute",
            right: "0%",
            top: "0%",
            objectFit: "contain",
            width: "24%",
            height: "42%",
            margin: "0",
          }}
        />

        <img
          src={bottomPuzzle}
          style={{
            position: "absolute",
            right: "10%",
            bottom: "0%",
            objectFit: "contain",
            width: "38%",
            height: "22%",
            zIndex: 1,
            margin: "0",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "45%",
            left: "20%",
            // animationName: "slider",
            // animationDuration: "3s",
          }}
        >
          <h1 style={headStyle}>Hello! I'm Samar.</h1>
          <h1 style={headStyle}>I like making things.</h1>
          <button
            onClick={() => navigate("/about")}
            style={{
              backgroundColor: "#F187CB",
              width: "10vw",
              height: "3vw",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              fontSize: "1vw",
            }}
          >
            See work
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
