import React from "react";
import { Link } from "react-router-dom";
import Background from "../Background";
import Friend1 from "../Friend1";
import Calculating from "../Calculating";
import "./SplitingFriendPage.css";

function SplitingFriendPage(props) {
  const { displaceReceipt, addMoreItems, friend1Props, friend12Props, friend13Props, calculatingProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="spliting-friend-page screen">
        <div className="overlap-group5-1">
          <Background />
          <div className="list border-1px-star-dust"></div>
          <Friend1
            friend12Props={friend1Props.friend12Props}
            friend1Item1Props={friend1Props.friend1Item1Props}
            friend1Item12Props={friend1Props.friend1Item12Props}
            friend1Item13Props={friend1Props.friend1Item13Props}
          />
          <Friend1
            className={friend12Props.className}
            friend12Props={friend12Props.friend12Props}
            friend1Item1Props={friend12Props.friend1Item1Props}
            friend1Item12Props={friend12Props.friend1Item12Props}
            friend1Item13Props={friend12Props.friend1Item13Props}
          />
          <Friend1
            className={friend13Props.className}
            friend12Props={friend13Props.friend12Props}
            friend1Item1Props={friend13Props.friend1Item1Props}
            friend1Item12Props={friend13Props.friend1Item12Props}
            friend1Item13Props={friend13Props.friend1Item13Props}
          />
          <div className="overlap-group4-2">
            <Link to="/spliting-friend-page">
              <div className="receipt-place"></div>
            </Link>
            <div className="displace-receipt valign-text-middle roboto-normal-black-25px">{displaceReceipt}</div>
          </div>
          <div className="add-more-item border-1px-black"></div>
          <div className="add-more-items valign-text-middle roboto-normal-white-15px">{addMoreItems}</div>
          <Calculating calculating={calculatingProps.calculating} calculate={calculatingProps.calculate} />
        </div>
      </div>
    </div>
  );
}

export default SplitingFriendPage;
