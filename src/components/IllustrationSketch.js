import React from "react";
import IllustrationPuzzle from "./IllustrationPuzzle";

import one from "../assets/Sketchbook/1.png";
import oneA from "../assets/Sketchbook/1.1.png";
import oneB from "../assets/Sketchbook/1.2.png";
import oneC from "../assets/Sketchbook/1.3.png";
import two from "../assets/Sketchbook/2.png";
import twoA from "../assets/Sketchbook/2.1.png";
import twoB from "../assets/Sketchbook/2.2.png";
import twoC from "../assets/Sketchbook/2.3.png";
import three from "../assets/Sketchbook/3.png";
import four from "../assets/Sketchbook/4.png";
import five from "../assets/Sketchbook/5.png";
import six from "../assets/Sketchbook/6.png";
import seven from "../assets/Sketchbook/7.png";
import sevenA from "../assets/Sketchbook/7.1.png";
import sevenB from "../assets/Sketchbook/7.2.png";
import sevenC from "../assets/Sketchbook/7.3.png";
import eight from "../assets/Sketchbook/8.png";
import nine from "../assets/Sketchbook/9.png";

function IllustrationSketch() {
  return (
    <div className="col_container">
      <div className="col_1">
        <IllustrationPuzzle one={one} oneA={oneA} oneB={oneB} oneC={oneC} />
        <IllustrationPuzzle one={two} oneA={twoA} oneB={twoB} oneC={twoC} />
        <img src={three} alt="" width="100%" />
      </div>
      <div className="col_2">
        <img
          src={four}
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
          src={six}
          alt=""
          width="100%"
          // height="100%"
        />
      </div>
      <div className="col_3">
        <IllustrationPuzzle
          one={seven}
          oneA={sevenA}
          oneB={sevenB}
          oneC={sevenC}
        />

        <img
          src={eight}
          alt=""
          width="100%"
          // height="100%"
          style={{
            objectFit: "contain",
            marginBottom: "7%",
          }}
        />
        <img
          src={nine}
          alt=""
          width="100%"
          // height="100%"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

export default IllustrationSketch;
