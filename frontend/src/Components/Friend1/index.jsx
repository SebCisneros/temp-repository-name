import React from "react";
import Friend12 from "../Friend12";
import Friend1Item1 from "../Friend1Item1";
import AddMoreItems from "../AddMoreItems";
import "./Friend1.css";

function Friend1(props) {
  const { className, friend12Props, friend1Item1Props, friend1Item12Props, friend1Item13Props } = props;

  return (
    <div className={`friend-1 ${className || ""}`}>
      <Friend12 title={friend12Props.title} />
      <Friend1Item1 item1={friend1Item1Props.item1} />
      <Friend1Item1 item1={friend1Item12Props.item1} className={friend1Item12Props.className} />
      <Friend1Item1 item1={friend1Item13Props.item1} className={friend1Item13Props.className} />
      <AddMoreItems />
    </div>
  );
}

export default Friend1;
