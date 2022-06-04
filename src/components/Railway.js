import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Railway.css";
// import Rail1 from "../Assets/Rail1.png";
import UTopR from "../Assets/UTopR.png";
import UBottomL from "../Assets/UBottomL.png";
import LeftArrow from "../Assets/LeftArrow.png";
import RightArrow from "../Assets/RightArrow.png";
import Rectangle from "../Assets/Rectangle.png";

function Railway() {
  const [images, setImages] = React.useState([]);
  const [imgNum, setImgNum] = React.useState(0);
  const location = useLocation();
  React.useEffect(() => {
    setImages([...location.state.img]);
  }, []);

  const rightImg = () => {
    console.log("dddd");
    if (imgNum >= images.length - 1) {
    } else setImgNum(imgNum + 1);
  };
  const leftImg = () => {
    if (imgNum == 0) {
    } else setImgNum(imgNum - 1);
  };
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
          <img
            src={images[imgNum]}
            alt=""
            width="100%"
            height="100%"
            style={{ objectFit: "contain" }}
          />
          <div className="btn_grp">
            <button onClick={() => leftImg()}>
              <img src={LeftArrow} alt="" width="60%" height="90%" />
            </button>
            <button onClick={() => rightImg()}>
              <img src={RightArrow} alt="" width="60%" height="90%" />
            </button>
          </div>
        </div>
        <div className="text_div">
          <h1>{location.state.heading}</h1>
          <p>{location.state.subheading}</p>
          <div
            style={{
              backgroundColor: "#D4C0FF",
              height: "2px",
              width: "70%",
              margin: "2% 0% 2% 0%",
            }}
          ></div>

          <p>{location.state.text1}</p>
          {/* <br></br> */}
          <p>{location.state.text2}</p>
          {/* <br></br> */}
          <p>{location.state.text2}</p>
          <button className="rail_btn">View Full on Behance</button>
        </div>
      </div>
    </div>
  );
}

export default Railway;
