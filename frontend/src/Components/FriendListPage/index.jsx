import React from "react";
import { Link } from "react-router-dom";
import Background from "../Background";
import Split2 from "../Split2";
import FriendRequestButton from "../FriendRequestButton";
import FriendButton from "../FriendButton";
import "./FriendListPage.css";

function FriendListPage(props) {
  const {
    friendName,
    friendName2,
    friendName3,
    manu_Line,
    logo,
    temp_Name,
    split2Props,
    split22Props,
    friendRequestButtonProps,
    friendButtonProps,
    friendRequestButton2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="friend-list-page screen">
        <div className="overlap-group5-3">
          <Background />
          <div className="overlap-group-10 border-1px-star-dust">
            <div className="friend-picture-1"></div>
            <div className="friend-name-1 valign-text-middle roboto-normal-black-14px">{friendName}</div>
          </div>
          <div className="overlap-group1-4 border-1px-star-dust">
            <div className="friend-picture-1"></div>
            <div className="friend-name-1 valign-text-middle roboto-normal-black-14px">{friendName2}</div>
          </div>
          <div className="overlap-group2-3 border-1px-star-dust">
            <div className="friend-picture-1"></div>
            <div className="friend-name-1 valign-text-middle roboto-normal-black-14px">{friendName3}</div>
            <Split2 />
          </div>
          <Split2 className={split2Props.className} />
          <Split2 className={split22Props.className} />
          <div className="top-bar-3">
            <div className="overlap-group3-1">
              <FriendRequestButton>{friendRequestButtonProps.children}</FriendRequestButton>
              <FriendButton>{friendButtonProps.children}</FriendButton>
              <img className="manuline-3" src={manu_Line} />
            </div>
            <div className="user-picture-3"></div>
          </div>
          <FriendRequestButton className={friendRequestButton2Props.className}>
            {friendRequestButton2Props.children}
          </FriendRequestButton>
          <div className="overlap-group4-3">
            
          </div>
          <div className="temp-name-1 valign-text-middle roboto-normal-black-16px">{temp_Name}</div>
        </div>
      </div>
    </div>
  );
}

export default FriendListPage;
