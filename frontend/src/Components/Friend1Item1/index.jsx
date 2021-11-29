import React from "react";
import "./Friend1Item1.css";

function Friend1Item1(props) {
  const { item1, className } = props;

  return (
    <div className={`friend-1-item-1-1 ${className || ""}`}>
      <div className="item-1 valign-text-middle roboto-normal-black-25px">{item1}</div>
      <div className="overlap-group-9 border-1px-black">
        <input className="price roboto-normal-star-dust-18px" name="price" placeholder="Price" type="text" />
      </div>
    </div>
  );
}

export default Friend1Item1;
