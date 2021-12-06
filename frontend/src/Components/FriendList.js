import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../CSSComponents/FriendList.css";
import defaultUserPic from "../media/default-user-profile-pic.svg";
import { useAuth } from "../context/AuthContext";

function Friend(friend) {
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
  const currentUser = useAuth();
  const [allUser, setAllUser] = useState([]);
  const [friends, setFriends] = useState([]);
  const [input, setIput] = useState("");


  useEffect(() => {
    async function setUp (){
      AllUser_helper = await userFunctions.getAllUsers()
      setAllUser(AllUser_helper)
    }
    setUp()
  },[]);

  handleInput((e) =>{
    setIput(e.target.value)
  })

  handleAddFriend((email) => {
    async function addFriend() {
      await userFunctions.addFriend(currentUser.email, email)
    }
    addFriend()
  },[]);

  //handleRmoveFriend((e) =>{
  //  setFriends(friends.filter((friend) => friend.email !== e.target.value),
  //})

  return (
    <div className="body">
      <h2>Friend List</h2>
      <input
        type="text"
        placeholder="Friend Email"
        value={handleInput}
        onChange={handleInput}
      />
      <Link to="/friendlist" style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <button id="search_button" onClick={e => handleAddFriend(e.target.value)}>
          Search friend
        </button>
      </Link>
      {friends.length > 0 ? (
        <div className="friends_list">
          {this.state.friends.map((friend) => (
            <Friend
              key={friend.email}
              friend={friend}
            />
          ))}
        </div>
      ) : (
        "Time to add new friends."
      )}
    </div>
  );
}
