import React from "react";
import IllustrationPuzzle from "./IllustrationPuzzle";
import one from "../assets/Landscapes/1.png";
import oneA from "../assets/Landscapes/1.1.png";
import oneB from "../assets/Landscapes/1.2.png";
import oneC from "../assets/Landscapes/1.3.png";
import two from "../assets/Landscapes/2.png";
import three from "../assets/Landscapes/3.png";
import four from "../assets/Landscapes/4.png";
import five from "../assets/Landscapes/5.png";
import six from "../assets/Landscapes/6.png";
import seven from "../assets/Landscapes/7.png";
import eight from "../assets/Landscapes/8.png";
import eightA from "../assets/Landscapes/8.1.png";
import eightB from "../assets/Landscapes/8.2.png";
import eightC from "../assets/Landscapes/8.3.png";
import nine from "../assets/Landscapes/9.png";
import ten from "../assets/Landscapes/10.png";
import eleven from "../assets/Landscapes/11.png";
function IllustrationLand() {
  return (
    <div className="col_container">
      <div className="col_1">
        <IllustrationPuzzle one={one} oneA={oneA} oneB={oneB} oneC={oneC} />
        <img
          src={two}
          alt=""
          width="100%"
          // height="100%"
          style={{ objectFit: "contain", marginBottom: "7%" }}
        />
        <img src={three} alt="" width="100%" />
        <img src={four} alt="" width="100%" style={{ marginTop: "7%" }} />
      </div>
      <div className="col_2">
        <img
          src={five}
          alt=""
          width="100%"
          // height="100%"
          className="col2_img"
        />
        <img
          src={six}
          alt=""
          width="100%"
          // height="100%"
          style={{ marginTop: "7%", marginBottom: "7%" }}
        />
        <img
          src={seven}
          alt=""
          width="100%"
          // height="100%"
        />
      </div>
      <div className="col_3">
        <div>
          <div style={{ display: "flex", marginBottom: "7%" }}>
            <img
              src={eightA}
              alt=""
              width="31%"
              height="100%"
              style={{ objectFit: "contain", marginRight: "4%" }}
            />
            <img
              src={eightB}
              alt=""
              width="31%"
              height="100%"
              style={{ objectFit: "contain", marginRight: "4%" }}
            />
            <img
              src={eightC}
              alt=""
              width="31%"
              height="100%"
              style={{ objectFit: "contain" }}
            />
          </div>
          <img
            src={eight}
            alt=""
            width="100%"
            height="100%"
            style={{ objectFit: "contain", marginBottom: "7%" }}
          />
        </div>

        <img
          src={nine}
          alt=""
          width="100%"
          // height="100%"
          style={{
            objectFit: "contain",
            marginBottom: "7%",
          }}
        />
        <img
          src={ten}
          alt=""
          width="100%"
          // height="100%"
          style={{ objectFit: "contain", marginBottom: "7%" }}
        />
        <img
          src={eleven}
          alt=""
          width="100%"
          // height="100%"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

export default IllustrationLand;
