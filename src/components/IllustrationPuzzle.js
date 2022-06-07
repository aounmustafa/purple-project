import React from "react";

function IllustrationPuzzle({ one, oneA, oneB, oneC }) {
  return (
    <div>
      <img
        src={one}
        alt=""
        width="100%"
        height="100%"
        // style={{ objectFit: "contain" }}
      />
      <div style={{ display: "flex", marginTop: "7%", marginBottom: "7%" }}>
        <img
          src={oneA}
          alt=""
          width="31%"
          height="100%"
          style={{ objectFit: "contain", marginRight: "4%" }}
        />
        <img
          src={oneB}
          alt=""
          width="31%"
          height="100%"
          style={{ objectFit: "contain", marginRight: "4%" }}
        />
        <img
          src={oneC}
          alt=""
          width="31%"
          height="100%"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

export default IllustrationPuzzle;
