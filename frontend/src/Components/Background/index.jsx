import React from "react";
import "./Background.css";

function Background(props) {
  const { className } = props;

  return <div className={`background ${className || ""}`} id="background"></div>;
}

export default Background;
