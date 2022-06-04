import React from "react";
import UTopR from "../Assets/UTopR.png";
import UBottomL from "../Assets/UBottomL.png";

function TarrotBox() {
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
          <img src={MuseBox} alt="" width="110%" height="90%" />
          <div className="slider">
            {/* <img src={LeftArrow} alt="" width="5%" height="10%" />
            <img src={Rectangle} alt="" width="90%" height="30%" />
            <img src={RightArrow} alt="" width="5%" height="9%" /> */}
          </div>
        </div>
        <div className="text_div">
          <h1>Sound Device</h1>
          <p>Olympus to Musebox</p>
          <div
            style={{
              backgroundColor: "#D4C0FF",
              height: "2px",
              width: "70%",
              margin: "2% 0% 2% 15%",
            }}
          ></div>

          <p>A project done for Studio: Principles of Interaction Design</p>
          <br></br>
          <p>
            This project started out as Olympus in my second-year at university
            and transformed into Musebox in my final year at university.
          </p>
          <br></br>
          <p>
            The product is a sound device that can connect to devices whilst
            also being a white noise machine with built in sounds. In the
            original design the material is a tangible foam that contracts and
            expands to present user feedback. Held in place by a magnetic plate,
            it can easily become two separate devices and be simultaneously
            used.
          </p>
          <button className="rail_btn">View Full on Behance</button>
        </div>
      </div>
    </div>
  );
}

export default TarrotBox;
