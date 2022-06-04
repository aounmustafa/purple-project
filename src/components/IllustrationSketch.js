import React from "react";
import IllustrationPuzzle from "./IllustrationPuzzle";

import one from "../Assets/Sketchbook/1.png";
import oneA from "../Assets/Sketchbook/1.1.png";
import oneB from "../Assets/Sketchbook/1.2.png";
import oneC from "../Assets/Sketchbook/1.3.png";
import two from "../Assets/Sketchbook/2.png";
import twoA from "../Assets/Sketchbook/2.1.png";
import twoB from "../Assets/Sketchbook/2.2.png";
import twoC from "../Assets/Sketchbook/2.3.png";
import three from "../Assets/Sketchbook/3.png";
import four from "../Assets/Sketchbook/4.png";
import five from "../Assets/Sketchbook/5.png";
import six from "../Assets/Sketchbook/6.png";
import seven from "../Assets/Sketchbook/7.png";
import sevenA from "../Assets/Sketchbook/7.1.png";
import sevenB from "../Assets/Sketchbook/7.2.png";
import sevenC from "../Assets/Sketchbook/7.3.png";
import eight from "../Assets/Sketchbook/8.png";
import nine from "../Assets/Sketchbook/9.png";

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
