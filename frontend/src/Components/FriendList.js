import {React, useState} from "react";
import { alignPropType } from "react-bootstrap/esm/DropdownMenu";
import "../CSSComponents/FriendList.css"
import defaultUserPic from "../media/default-user-profile-pic.svg"
import { RiMoneyDollarBoxFill, RiChat4Fill } from "react-icons/ri";

function FriendList () {
    const [friends,setFriends] = useState([
        {
            username: "Floyd",
            profilePic: defaultUserPic,
        },
        {
            username: "Ali",
            profilePic: defaultUserPic,
        },
        {
            username: "Sebatian",
            profilePic: defaultUserPic,
        },
        {
            username: "seongjae",
            profilePic: defaultUserPic,
        },
        {
            username: "jieyi",
            profilePic: defaultUserPic,
        }
    ]);

    return (
        <div className="body">
            <h2>Friend List</h2>
            {friends.length > 0 ?
            <div className="friends_list">
                {friends.map(frined => 
                    
                        <table className="friend_info">
                            <th >
                                <p className="userName">
                                    <img className="profilePic" src={frined.profilePic} />
                                    {frined.username}   
                                </p>
                            </th>
                            <th>
                                <RiMoneyDollarBoxFill className="icon" size={35}/>
                                <RiChat4Fill className="icon" size={35} />
                            </th>
                            
                        </table>
                    )}                   
            </div>    
            : "Time to add new friends."}
        </div>
    )
}

export default FriendList