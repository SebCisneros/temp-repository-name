import {React, Component} from "react";
import { alignPropType } from "react-bootstrap/esm/DropdownMenu";
import "../CSSComponents/FriendList.css"
import defaultUserPic from "../media/default-user-profile-pic.svg"

function Friend(props) {
    const {friend, remove} = props
    return (
        <div className="friend-container">
            
                <div className="inline"> <img className="profilePic" src={friend.profilePic} alt={friend.email} /> 
                {friend.email}
                </div>
                
                <div className="inline">
                    <p></p>
                </div>
            
            
                <div id="push-right">
                    <button className="button" id="remove_button" onClick={() => remove(friend.email)}>Remove Friend</button>
                </div>
                
                <div  id="splitRequest">
                    {/* modify function for this 
                    allow this switch to request page directly and request page will show this as first name */}           
                    <button className="button" id="request_button">
                    <Link to="/">Request Split</Link>
                    </button>
                </div>  
                    
        </div>
    );
}


export default class FriendList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends : [],
            input : ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleAddFriend = this.handleAddFriend.bind(this);
        this.handleRmoveFriend = this.handleRmoveFriend.bind(this);
        this.handleRequestSplit = this.handleRequestSplit.bind(this);
    }

    componentDidMount(){
        this.setState({
            friends : [
                {email: "Jieyi@buffalo.edu", profilePic: defaultUserPic,},
                {email: "Ali@buffalo.edu", profilePic: defaultUserPic,},
                {email: "Sebatian@buffalo.edu", profilePic: defaultUserPic,},
                {email: "seongjae@buffalo.edu", profilePic: defaultUserPic,},
                {email: "Floyd@buffalo.edu", profilePic: defaultUserPic,}
            ]
        })
    }

    handleInput(e){
        this.setState({
            input : e.target.value
        })
    }

    handleAddFriend(){
        {this.state.input !== '' &&
            this.setState({
                friends: [...this.state.friends, { email: this.state.input, profilePic: defaultUserPic}],
                input: ''
            })
        }
        // this need to search if the user exist and add it to this user's friend list
    }


    handleRmoveFriend(email){
        this.setState({
            friends : this.state.friends.filter((friend) => friend.email !== email)
        });

        // this should remove this person's friend from database
    }

    render() {
        return (
            <div className="body">
                <h2>Friend List</h2>
                <input 
                    type="text"
                    placeholder="Friend Email"
                    value={this.state.input}
                    onChange={this.handleInput}
                    />
                <button id="search_button" onClick={this.handleAddFriend}>
                Search friend
                </button>
                {this.state.friends.length > 0 ?
                <div className="friends_list">
                    {this.state.friends.map(friend => <Friend key={friend.email} friend={friend} remove={this.handleRmoveFriend} splitRequest={this.handleRequestSplit} />)}                   
                </div>    
                : "Time to add new friends."}
            </div>
        )
    }
}
