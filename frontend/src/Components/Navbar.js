import React from "react";
import { useAuth } from "../context/AuthContext";
import "../CSSComponents/Navbar.css";

export default function NavBar() {
  const { signup, currentUser } = useAuth();

  return (
    <nav className="sticky">
      <div className="logo">SPLITTY</div>
      <div className="links">
        <a href="">ABOUT US</a>
        <a href="">SIGN UP</a>
      </div>
    </nav>
  );
}
