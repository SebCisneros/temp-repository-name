import React from "react";
import { Link } from "react-router-dom";
import Background from "../Background";
import Split from "../Split";
import "./RequestFriendListPage.css";

function RequestFriendListPage(props) {
  const {
    temp_Name,
    friendName,
    requestMessage,
    overlapGroup1,
    request,
    friendName2,
    requestMessage2,
    overlapGroup,
    request2,
    friendName3,
    requestMessage3,
    overlapGroup2,
    request3,
    unsure,
    unsure2,
    place,
    manu_Line,
    inputType,
    inputPlaceholder,
    splitProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="request-friend-list-page screen" name="form1" action="form1" method="post">
        <div className="overlap-group5">
          <Background />
          <div className="temp-name valign-text-middle roboto-normal-black-16px">{temp_Name}</div>
          <div className="overlap-group-1 border-1px-star-dust">
            <div className="friend-picture"></div>
            <div className="flex-col">
              <div className="friend-name valign-text-middle roboto-normal-black-14px">{friendName}</div>
              <div className="request-message valign-text-middle roboto-normal-star-dust-13px">{requestMessage}</div>
            </div>
            <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <div className="request valign-text-middle roboto-bold-white-12px">{request}</div>
            </div>
          </div>
          <div className="overlap-group2 border-1px-star-dust">
            <div className="friend-picture"></div>
            <div className="flex-col">
              <div className="friend-name valign-text-middle roboto-normal-black-14px">{friendName2}</div>
              <div className="request-message valign-text-middle roboto-normal-star-dust-13px">{requestMessage2}</div>
            </div>
            <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
              <div className="request valign-text-middle roboto-bold-white-12px">{request2}</div>
            </div>
          </div>
          <div className="overlap-group3 border-1px-star-dust">
            <div className="friend-picture"></div>
            <div className="flex-col">
              <div className="friend-name valign-text-middle roboto-normal-black-14px">{friendName3}</div>
              <div className="request-message valign-text-middle roboto-normal-star-dust-13px">{requestMessage3}</div>
            </div>
            <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <div className="request valign-text-middle roboto-bold-white-12px">{request3}</div>
            </div>
          </div>
          <div className="top-bar">
            <div className="overlap-group4">
              <div className="overlap-group-2">
                <Link to="/friend-request-list-page">
                  <div className="unsure-button border-4px-downriver"></div>
                </Link>
                <div className="unsure valign-text-middle roboto-normal-downriver-16px">{unsure}</div>
              </div>
              <div className="overlap-group1">
                <a href="#background">
                  <div className="unsure-button-1 border-4px-downriver"></div>
                </a>
                <div className="unsure-1 valign-text-middle roboto-normal-downriver-16px">{unsure2}</div>
              </div>
              <Link to="/friend-list-page">
                <div className="friend-button">
                  <div className="overlap-group2-1 border-4px-downriver">
                    <div className="place valign-text-middle roboto-normal-downriver-16px">{place}</div>
                  </div>
                </div>
              </Link>
              <img className="manuline" src={manu_Line} />
            </div>
            <div className="user-picture"></div>
          </div>
          <div className="rectangle-5"></div>
          <input className="user-name" name="username" placeholder={inputPlaceholder} type={inputType} required />
          <Split submitButton={splitProps.submitButton} submit={splitProps.submit} />
        </div>
      </form>
    </div>
  );
}

export default RequestFriendListPage;
