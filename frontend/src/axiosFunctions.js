import axios from 'axios';

export async function getAllUsers(){
    const allUsers =  await axios.get("https://splittybackend.herokuapp.com/user/getAllUsers")
    console.log(allUsers.data)
    return allUsers.data
};

export async function getFriendList(username){
    const data = {
        "userName": username
      } 
    const friendList = await axios.post("https://splittybackend.herokuapp.com//user/getFriendList", data);
    return friendList
};

export async function addFriend(user, friend){
    const data = {
        "userName": user,
        "friend": friend
      } 
    const friendList = await axios.post("https://splittybackend.herokuapp.com/user/addFriend", data);
    return friendList
};