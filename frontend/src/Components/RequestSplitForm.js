import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSSComponents/RequestSplit.css"
import { useAuth } from "../context/AuthContext";
import { getFriendList } from "../axiosFunctions"

export default function Split() {
    const [indexOfItem, setIndexOfItem] = useState(0);
    const currentUser = useAuth()
    const [requestSection, setRequestSection] = useState([]);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        async function setUp (){
            // get all the friend of current user
            var friends_helper = ["Ali@gmail.com", "Seb@gmail.com","check@gmali.com"];
            //var friends_helper = await getFriendList(currentUser.email)
            setFriends(friends_helper);

            // change the requestSection
            var requestSection_helper = [{friend: "", itemPrice: [0], total: 0}];
            if (friends_helper.length > 0){
                requestSection_helper = [{friend: friends_helper[0], itemPrice: [0], total: 0}]
            }
            setRequestSection(requestSection_helper);
        }
        setUp()
    },[])


    function handleChangeFriend(setionIndex, email){
        let requestSectionHelp = requestSection;
        requestSectionHelp[setionIndex].Friend = email;
        setRequestSection(requestSectionHelp);
    }

    function handleChangeItemPrice(setionIndex, itemIndex, itemPrice){
        let requestSectionHelp = requestSection;
        requestSectionHelp[setionIndex].itemPrice[itemIndex] = itemPrice;
        var total = 0;
        requestSectionHelp[setionIndex].total = total;
        setRequestSection(requestSectionHelp);
    }

    function addItem(setionIndex){
        document.write(requestSection.length)
        let requestSectionHelp = requestSection;
        requestSectionHelp[setionIndex].itemPrice = [...requestSection[setionIndex].itemPrice, 0];
        setRequestSection(requestSectionHelp);
    }

    function removeRequestSection(index){
        let requestSectionHelp = requestSection;
        requestSectionHelp.splice(index, 1)
        setRequestSection(requestSectionHelp);
    }

    function addRequestSection(){
        setRequestSection([...requestSection, {username: friends[0], itemPrice :  [0], total: 0}])
    }


    async function handleSubmit(){
        document.write(friends)
    }

    return (
        <div id="center">
            <div id="instruction">
                <h6>Please Fill out the form.
                    <br/>Use Add-Item button when you have more items request from the user
                    <br />Use Add-Friend button when you have more friend you want to request split from.
                </h6>
            </div>

            <form onSubmit={handleSubmit}>
                {/* loop through requestSection */}
                {requestSection.map((element, index) => (
                    <div className='one-user-request' key={index}>

                        {/* username */}
                        <label key={index+1}>Username: </label>
                        <select 
                            required
                            key={index+2}
                            value={element.username}
                            onChange={e => handleChangeFriend(index, e.target.value)}
                        >
                            {/* show a list of current user's friends */}
                            {
                                friends.map((user) =>
                                    <option
                                        key={user}
                                        value={user}
                                        >{user}
                                    </option>
                                )
                            }
                        </select>

                        {/* item price input list */}
                        {element.itemPrice.map( (item, i) =>
                            <div className="item-list">
                                <label key={(index+5+i).toString()}>Item Price: </label>
                                <input
                                    required
                                    key={(index+6+i).toString()}
                                    type='number'
                                    min='0'
                                    step='0.01'
                                    value={item || 0}
                                    onChange={e => handleChangeItemPrice(index, i, e.target.value)} />
                            </div>
                        )}

                        <div className="button-section">
                            {/* press a add item button for adding more item input for the request section */}
                            <button key={index+3} className="button" id="addItem" type="button" onClick={() => addItem(index) }>Add Item</button>
                            
                            {/* press a remove button for each requestsection after the first one */}
                            {
                                index ?
                                    <button 
                                        key={index+4}
                                        type="button"  
                                        className="button" 
                                        id="remove" 
                                        onClick={() => removeRequestSection(index)}>Remove Freind</button>
                                        : null
                            }
                        </div>
                        <br />
                        <br />
                        
                    </div>
                    ))}

                <br />
                <div className="button-section">
                    <button className="button" id="addFriend" type="button" onClick={() => addRequestSection()}>Add Friend</button>
                    <button className="button" id="Submit" type="submit"><Link to="/profile" style={{ color: 'inherit', textDecoration: 'inherit'}}>Submit</Link></button>
                </div>
            </form>
            
        </div>
    )
}                                    