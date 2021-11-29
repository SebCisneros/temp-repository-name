import React from "react";
import "./FriendButton.css";

function FriendButton(props) {
  const { children } = props;

  return (
    <a href="#background">
      <div className="friend-button-1 border-4px-downriver">
        <div className="place-2 valign-text-middle roboto-normal-downriver-16px">{children}</div>
      </div>
    </a>
  );
}

export default FriendButton;
