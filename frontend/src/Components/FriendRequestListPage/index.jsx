import React from "react";
import { Link } from "react-router-dom";
import Background from "../Background";
import "./FriendRequestListPage.css";

function FriendRequestListPage(props) {
  const {
    temp_Name,
    friendName,
    requestMessage,
    overlapGroup1,
    accept,
    friendName2,
    requestMessage2,
    overlapGroup,
    accept2,
    friendName3,
    requestMessage3,
    overlapGroup2,
    accept3,
    unsure,
    place,
    manu_Line,
    unsure2,
    place2,
    findFriend,
    manu_Line2,
    logo,
    logInProps,
    logIn2Props,
    signUpProps,
  } = props;

  return (
    <div className="container-center-horizontal">
     
      <div className="friend-request-list-page screen">
        <div className="overlap-group7-1">
          <Background />
          <div className="temp-name-2 valign-text-middle roboto-normal-black-16px">{temp_Name}</div>
          <div className="overlap-group-17 border-1px-star-dust">
            <div className="friend-picture-2"></div>
            <div className="flex-col-6">
              <div className="friend-name-2 valign-text-middle roboto-normal-black-14px">{friendName}</div>
              <div className="request-message-1 valign-text-middle roboto-normal-star-dust-13px">{requestMessage}</div>
            </div>
            <div className="overlap-group-13" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <div className="accept valign-text-middle roboto-bold-white-12px">{accept}</div>
            </div>
          </div>
          <div className="overlap-group2-4 border-1px-star-dust">
            <div className="friend-picture-2"></div>
            <div className="flex-col-6">
              <div className="friend-name-2 valign-text-middle roboto-normal-black-14px">{friendName2}</div>
              <div className="request-message-1 valign-text-middle roboto-normal-star-dust-13px">{requestMessage2}</div>
            </div>
            <div className="overlap-group-13" style={{ backgroundImage: `url(${overlapGroup})` }}>
              <div className="accept valign-text-middle roboto-bold-white-12px">{accept2}</div>
            </div>
          </div>
          <div className="overlap-group3-2 border-1px-star-dust">
            <div className="friend-picture-2"></div>
            <div className="flex-col-6">
              <div className="friend-name-2 valign-text-middle roboto-normal-black-14px">{friendName3}</div>
              <div className="request-message-1 valign-text-middle roboto-normal-star-dust-13px">{requestMessage3}</div>
            </div>
            <div className="overlap-group-13" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <div className="accept valign-text-middle roboto-bold-white-12px">{accept3}</div>
            </div>
          </div>
          <div className="top-bar-4">
            <div className="overlap-group-14">
              <div className="overlap-group-15">
                <a href="#background">
                  <div className="unsure-button-2 border-4px-downriver"></div>
                </a>
                <div className="unsure-2 valign-text-middle roboto-normal-downriver-16px">{unsure}</div>
              </div>
              <Link to="/friend-list-page">
                <div className="friend-button-2">
                  <div className="overlap-group-16 border-4px-downriver">
                    <div className="place-3 valign-text-middle roboto-normal-downriver-16px">{place}</div>
                  </div>
                </div>
              </Link>
              <img className="manuline-4" src={manu_Line} />
            </div>
            <div className="user-picture-4"></div>
          </div>
          <div className="top-bar-5">
            <div className="overlap-group-14">
              <div className="overlap-group-15">
                <a href="#background">
                  <div className="unsure-button-2 border-4px-downriver"></div>
                </a>
                <div className="unsure-2 valign-text-middle roboto-normal-downriver-16px">{unsure2}</div>
              </div>
              <Link to="/friend-list-page">
                <div className="friend-button-2">
                  <div className="overlap-group-16 border-4px-downriver">
                    <div className="place-4 valign-text-middle roboto-normal-downriver-16px">{place2}</div>
                  </div>
                </div>
              </Link>
              <Link to="/request-friend-list-page">
                <div className="friend-button-3">
                  <div className="overlap-group-16 border-4px-downriver">
                    <div className="find-friend valign-text-middle roboto-normal-downriver-16px">{findFriend}</div>
                  </div>
                </div>
              </Link>
              <img className="manuline-4" src={manu_Line2} />
            </div>
            <div className="user-picture-4"></div>
          </div>
          <div className="overlap-group6-3">
            <Link to="/index">
              <div className="logo-9 roboto-normal-white-30px">{logo}</div>
            </Link>
            <LogIn src={logInProps.src} />
            <LogIn src={logIn2Props.src} className={logIn2Props.className} />
            <SignUp src={signUpProps.src} />
          </div>
        </div>
      </div>
      <h1>WOWO</h1>
    </div>
  );
}

export default FriendRequestListPage;
