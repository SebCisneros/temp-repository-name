import { React, Component, useState } from "react";
import { Link } from "react-router-dom";
import { alignPropType } from "react-bootstrap/esm/DropdownMenu";
import "../CSSComponents/FriendList.css";
import defaultUserPic from "../media/default-user-profile-pic.svg";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

function Friend(friend,remove) {
     const { currentUser, logout } = useAuth();
 
  return (
    <div className="friend-container">
      <div className="inline">
        {" "}
        <img
          className="profilePic"
          src={friend.profilePic}
          alt={friend.email}
        />
        {friend.email}
      </div>

      <div className="inline">
        <p></p>
      </div>

      <div id="push-right">
        {/*<button
          className="button"
          id="remove_button"
          onClick={() => remove(friend.email)}
        >
          Remove Friend
        </button>*/}
      </div>

      <div id="splitRequest">
        {/* modify function for this 
                    allow this switch to request page directly and request page will show this as first name */}
        <button className="button" id="request_button">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>Request Split</Link>
        </button>
      </div>
    </div>
  );
}

export default function FriendList() {
  const { currentUser, logout } = useAuth();
  //{currentUser.email}
  function getAllUsers() {
    return ["Ali", "J", "Seb", "PlaceHolder"];
  }

  function getUserFriends() {
    return ["Ali", "Seb"];
  }

  function addFriend(username) {
    return "Friend Added";
  }

  const [friends, setFriends] = useState([]);
  const [input, setIput] = useState("");

  function handleInput(e) {
    this.setState({
      input: e.target.value,
    });
  }

  function handleAddFriend() {
    {
      this.state.input !== "" &&
        this.setState({
          friends: [
              ...this.state.friends,
              { email: this.state.input, profilePic: defaultUserPic }
          ],
          input: ""
      });
      // need to update this
      // call 
      //this.update_function()  
    }

  function handleRmoveFriend(email) {
    this.setState({
      friends: this.state.friends.filter((friend) => friend.email !== email),
    });
    // remove friend function
  }

  return (
    <div className="body">
      <h2>Friend List</h2>
      <input
        type="text"
        placeholder="Friend Email"
        value={handleInput}
        onChange={handleInput}
      />
      <button id="search_button" onClick={handleAddFriend}>
        Search friend
      </button>
      {friends.length > 0 ? (
        <div className="friends_list">
          {this.state.friends.map((friend) => (
            <Friend
              key={friend.email}
              friend={friend}
              remove={handleRmoveFriend}
              splitRequest={handleInput}
            />
          ))}
        </div>
      ) : (
        "Time to add new friends."
      )}
    </div>
  );
}
}
