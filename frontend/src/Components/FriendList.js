import { React, useState,useEffect } from "react";
import { Link,useHistory } from "react-router-dom";
import "../CSSComponents/FriendList.css";
import defaultUserPic from "../media/default-user-profile-pic.svg";

import { useAuth } from "../context/AuthContext";
import {getAllUsers,getFriendList,addFriend, removeFriend} from "../axiosFunctions"


export default function FriendList() {
  const history = useHistory()
  const {currentUser} = useAuth();
  const [allUser, setAllUser] = useState([]);
  const [friends, setFriends] = useState([]);
  const [input, setIput] = useState("");


  useEffect(() => {
    async function setUp (){
      // get all the user in a list
      const AllUser_helper = await getAllUsers()
      setAllUser(AllUser_helper)
      //setAllUser(["a@gmail.com", "b@gmail.com", "c@gmail.com", "d@gmail.com"])
      
      // get all the friend of current user
      //var friends_helper = ["Ali@gmail.com", "Seb@gmail.com","check@gmali.com"] 
      var friends_helper = await getFriendList(currentUser.email)
      friends_helper = friends_helper.data
      var friends_state = []
      for (let i = 0; i < friends_helper.length; i++) {
          friends_state.push({ email: friends_helper[i], profilePic: defaultUserPic })
      }
        
        
        setFriends(friends_state)

        // set input
        setIput(friends_helper[0])
    }
    setUp()
  },[]);






  async function handleAddFriend() {
    await addFriend(currentUser.email, input)
    setFriends(friends.push(input))
    
  };

  function handleInput(e){
    setIput(e.target.value)
  }

  async function handleRemoveFriend(email) {
    await removeFriend(currentUser.email, email)
    history.push("/friendslist")
  }

  return (
    <div className="body">
      <h2>Friend List</h2>

      {/* given all the users that is not current user's friend as drop down menu */}
      <select 
        required
        onChange={e => handleInput(e)}
      >
        {/* loops through this.state.Friends */}
        {
          allUser.map((user) =>
              <option
                  key={user}
                  value={user}
                  >{user}
              </option>
          )
        }
      </select>
      
      {/* refresh the page after add friend */}
     
        <button id="search_button" onClick={()=>handleAddFriend()}>
          Search friend
        </button>



      {/* refresh the page after add friend */}
      {friends.length > 0 ? (
        <div className="friends_list">

          {/* each friend section */}
            {friends.map((friend) => 
              <div className="friend-container">
              {/* friend profile pic and email */}
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
              
              {/* remove the friend */}
              <div id="push-right">
              </div>
              
              {/* go to request page */}
              <div id="splitRequest">
                <button className="button" id="request_button">
                  <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>Request Split</Link>
                </button>
              </div>
            </div>
          )}
        </div>
        ) : (
        "Time to add new friends."
      )}
    </div>
  );
}
