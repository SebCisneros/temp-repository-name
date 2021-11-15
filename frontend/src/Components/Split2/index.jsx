import React from "react";
import { Link } from "react-router-dom";
import "./Split2.css";

function Split2(props) {
  const { className } = props;

  return (
    <Link to="/spliting-friend-page" className="align-self-flex-center">
      <div className={`split ${className || ""}`}>
        <div className="place-1 valign-text-middle roboto-bold-white-12px">Split</div>
      </div>
    </Link>
  );
}

export default Split2;
