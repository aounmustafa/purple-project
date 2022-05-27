import React from "react";
import "./case.css";

import puzzle from "../assets/Unionpuzzle.png";
const CaseStudy = () => {
  console.log(puzzle);
  return (
    <div className="bg">
      <img src={puzzle} />
    </div>
  );
};

export default CaseStudy;
