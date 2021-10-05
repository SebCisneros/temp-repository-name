import React from "react";
import ReactDOM from "react-dom";
import "./CSSComponents/index.css";
import App from "./Components/App.js";
import "./CSSComponents/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./Components/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Navbar />
      <App />
    </AuthProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
