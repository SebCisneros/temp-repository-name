import React from "react";
import "./Calculating.css";

function Calculating(props) {
  const { calculating, calculate } = props;

  return (
    <div className="calculating" style={{ backgroundImage: `url(${calculating})` }}>
      <div className="calculate valign-text-middle">{calculate}</div>
    </div>
  );
}

export default Calculating;
