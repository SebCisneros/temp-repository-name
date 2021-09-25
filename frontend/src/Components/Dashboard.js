import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

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
        <div>
          <h1>Welcome to Splitty {JSON.stringify(currentUser.email)}</h1>
          <Button onClick={handleLogout}>Log Out</Button>
        </div>
      ) : (
        <div>
          {" "}
          <Link to="/login">
            {" "}
            <Button>Log In</Button>
          </Link>
          <Link to="/login">
            {" "}
            <Button>Sign up.</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
