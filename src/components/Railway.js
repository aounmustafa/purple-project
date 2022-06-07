import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Railway.css";
// import Rail1 from "../Assets/Rail1.png";
import UTopR from "../assets/UTopR.png";
import UBottomL from "../assets/UBottomL.png";
import LeftArrow from "../assets/LeftArrow.png";
import RightArrow from "../assets/RightArrow.png";
import Rectangle from "../assets/Rectangle.png";

function Railway() {
  const [images, setImages] = React.useState([]);
  const [imgNum, setImgNum] = React.useState(0);
  const location = useLocation();
  React.useEffect(() => {
    setImages([...location.state.img]);
  }, []);

  const rightImg = () => {
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
            style={{
              objectFit: "contain",
              width: "100%",
              height: "90%",
            }}
          />
          <div className="btn_grp">
            <button onClick={() => leftImg()}>
              <img src={LeftArrow} alt="" width="60%" height="90%" />
            </button>
            <div
              style={{
                border: "4px solid #9E7BD7",
                width: "100%",
                height: "100%",
              }}
            >
              <div
                style={{
                  borderRadius: "0px 10px 10px 0px",
                  border: "10px solid #D4C0FF",
                  width: `calc(98% / ${images.length - imgNum})`,
                  height: "100%",
                }}
              ></div>
            </div>
            <button onClick={() => rightImg()}>
              <img src={RightArrow} alt="" width="60%" height="90%" />
            </button>
          </div>
        </div>
        <div className="text_wrapper">
          <div className="text_div">
            <h1>{location.state.heading}</h1>
            <p>{location.state.subheading}</p>
            <div
              style={{
                backgroundColor: "#D4C0FF",
                height: "2px",
                width: "90%",
                margin: "2% 0% 2% 0%",
              }}
            ></div>

            <p>{location.state.text1}</p>

            <p>{location.state.text2}</p>
          </div>

          <div className="btn_div">
            <button className="rail_btn">View Full on Behance</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Railway;
