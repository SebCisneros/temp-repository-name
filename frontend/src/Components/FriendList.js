import { React, Component } from "react";
import { Link } from "react-router-dom";
import { alignPropType } from "react-bootstrap/esm/DropdownMenu";
import "../CSSComponents/FriendList.css";
import defaultUserPic from "../media/default-user-profile-pic.svg";
import axios from "axios";
import * as userFunctions from "../axiosFunctions";

function Friend(props) {
  const { friend, remove } = props;
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
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            Request Split
          </Link>
        </button>
      </div>
    </div>
  );
}

export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      all_users: [],
      input: "",
    };
    this.update_function = this.update_function.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleAddFriend = this.handleAddFriend.bind(this);
    this.handleRmoveFriend = this.handleRmoveFriend.bind(this);
  }

  getAllUsers() {
    return ["a@gmail.com", "b@gmail.com", "c@gmail.com", "d@gmail.com"];
  }

  getUserFriends() {
    return ["Ali@gmail.com", "Seb@gmail.com", "check@gmali.com"];
  }

  addFriend(username) {
    //document.write(username)
    return "Friend Added";
  }

  componentDidMount() {
    this.update_function();
  }

  async update_function() {
    const friend = this.getUserFriends();
    const friend_helper = [];
    for (let i = 0; i < friend.length; i++) {
      const _ = { email: friend[i], profilePic: defaultUserPic };
      friend_helper.push(_);
    }
    const allUser = await userFunctions.getAllUsers();
    var input = "";
    if (allUser.length > 0) {
      input = allUser[0];
    }
    this.setState({
      friends: friend_helper,
      all_users: allUser,
      input: input,
    });
  }

  handleInput(e) {
    this.setState({
      input: e.target.value,
    });
  }

  handleAddFriend() {
    var input = this.state.input;
    // make sure to change the input back
    this.setState({
      friends: [
        ...this.state.friends,
        { email: this.state.input, profilePic: defaultUserPic },
      ],
      input: "",
    });
    // need to update this
    // call
    //this.update_function()
  }

  handleRmoveFriend(email) {
    this.setState({
      friends: this.state.friends.filter((friend) => friend.email !== email),
    });
    // remove friend function
  }

  render() {
    return (
      <div className="body">
        {/* show all users */}

        <select required onChange={(e) => this.handleInput(e)}>
          {/* loops through this.state.Friends */}
          {this.state.all_users.map((user) => (
            <option key={user} value={user}>
              {user}
            </option>
          ))}
        </select>
        <Link to="/friendlist" style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <button id="search_button" onClick={this.handleAddFriend}>
          Add friend
        </button>
        </Link>
        {this.state.friends.length > 0 ? (
          <div className="friends_list">
            {this.state.friends.map((friend) => (
              <Friend
                key={friend.email}
                friend={friend}
                remove={this.handleRmoveFriend}
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
