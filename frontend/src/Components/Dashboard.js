import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Money_Transfer from "../media/Money_Transfer.svg";
import "../CSSComponents/Dashboard.css";
import SplitRequest from "./RequestSplitForm"

import dda from './dda.png';


import oki from './oki.png';


import wowzer from './Wowzer.png';

console.log(dda);

console.log(wowzer);

console.log(oki);

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to log out");
    }
  }


  return (
    <div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}> <img src = {dda} alt = "cur" /></div>

        <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>  [Insert short description here]</h1>

        <body>  </body> 
        <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: 100}}>Below shows you a short guide on how to use Splitty </h2>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}> <img src = {wowzer} alt = "cur" /></div>
        <body> </body> 
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}> <img src = {oki} alt = "cur" /></div>
                    
      {/* {currentUser ? (
        <>
        <SplitRequest/>
        </>
      ) : (
        <>
          <div className="MoneyTransferImage">
       
           
            <div className="AboutUs">

            </div>
          </div>
        </>
      )} */}
    </div>
  );
}
