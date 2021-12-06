import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Money_Transfer from "../media/Money_Transfer.svg";
import "../CSSComponents/Dashboard.css";
import SplitRequest from "./RequestSplitForm"
import FriendList from "./FriendList";

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
      {currentUser ? (
        <>
        <SplitRequest/>
        <FriendList/>


        </>
      ) : (
        <>
          <div className="MoneyTransferImage">
            <img src={Money_Transfer} alt="Money Transfer" width={"500"}></img>
            <div className="AboutUs">

            </div>
          </div>
        </>
      )}
    </div>
  );
}
