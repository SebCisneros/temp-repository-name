import React from "react";
import { useAuth } from "../context/AuthContext";
import "../CSSComponents/Navbar.css";
import { Link, useHistory } from "react-router-dom";

export default function NavBar() {
  const history = useHistory()
  const { signup, currentUser, logout } = useAuth();
    async function handleLogout() {
      try {
        await logout();
        history.push("/");
      } catch {
        console.log("Failed to log out");
      }
    }

  return (
    <nav className="sticky">
      <div className="logo">
        {" "}
        <Link to="/">SPLITTY</Link>
      </div>
      <div className="links">
        {currentUser ? (
          <>
            {" "}
            <a>
              <Link to="/profile">Profile</Link>
            </a>
            <a onClick={handleLogout}>
              <Link to="/logout">Logout</Link>
            </a>
          </>
        ) : (
          <>
            {" "}
            <a>
              <Link to="/login">Login</Link>
            </a>
            <a>
              {" "}
              <Link to="/signup">Sign Up</Link>
            </a>{" "}
            <a>
              {" "}
              <Link to="/friendListPage">FriendListPage</Link>
            </a>{" "}
          </>
          
        )}
      </div>
    </nav>
  );
}
