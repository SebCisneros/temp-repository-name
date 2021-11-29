import React from "react";
import "./Friend12.css";

function Friend12(props) {
  const { title } = props;

  return (
    <div className="friend-1-1">
      <h1 className="title valign-text-middle roboto-normal-black-25px">{title}</h1>
      <div className="overlap-group3-3 border-1px-black">
        <input
          className="friend-name-3 roboto-normal-star-dust-18px"
          name="friendname"
          placeholder="Friend name"
          type="text"
        />
      </div>
    </div>
  );
}

export default Friend12;
