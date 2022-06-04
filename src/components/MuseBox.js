import React from "react";
import UTopR from "../Assets/UTopR.png";
import UBottomL from "../Assets/UBottomL.png";
import "./Railway.css";
import MuseBoxImg from "../Assets/MuseboxImg.png";

function MuseBox() {
  return (
    <div className="rail_container">
      <div>
        <img
          src={UTopR}
          alt=""
          width="8%"
          height="18%"
          style={{
            position: "absolute",
            right: "0%",
            top: "10%",
          }}
        />
      </div>
      <div>
        <img
          src={UBottomL}
          alt=""
          width="8%"
          height="11%"
          style={{
            position: "absolute",
            bottom: "0%",
            zIndex: -1,
          }}
        />
      </div>
      <div className="main_container">
        <div className="img_div">
          <img src={MuseBoxImg} alt="" width="110%" height="90%" />
          <div className="slider">
            {/* <img src={LeftArrow} alt="" width="5%" height="10%" />
            <img src={Rectangle} alt="" width="90%" height="30%" />
            <img src={RightArrow} alt="" width="5%" height="9%" /> */}
          </div>
        </div>
        <div className="text_div">
          <h1></h1>
          <p></p>
          <div
            style={{
              backgroundColor: "#D4C0FF",
              height: "2px",
              width: "70%",
              margin: "2% 0% 2% 15%",
            }}
          ></div>

          <p></p>
          <br></br>
          <p></p>
          <br></br>
          <p></p>
          <button className="rail_btn">View Full on Behance</button>
        </div>
      </div>
    </div>
  );
}

export default MuseBox;
