import React from "react";
import { Link } from "react-router-dom";
import "./FriendRequestButton.css";

function FriendRequestButton(props) {
  const { children, className } = props;

  return (
    <Link to="/friend-request-list-page">
      <div className={`friend-request-button border-4px-downriver ${className || ""}`}>
        <div className="friend-request valign-text-middle roboto-normal-downriver-16px">{children}</div>
      </div>
    </Link>
  );
}

export default FriendRequestButton;
