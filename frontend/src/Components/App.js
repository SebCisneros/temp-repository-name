import React from "react";
import "../CSSComponents/App.css";
import Signup from "./Signup.js";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard.js";
import Login from "./Login";
import Profile from "./Profile";
import { PrivateRouteNotLoggedIn, PrivateRouteLoggedIn } from "./PrivateRoutes";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Navbar from "../Components/Navbar";

function App() {
  return (
    <div>
      
        <Router>
        <AuthProvider>
          <Navbar/>
            <Switch>
              <PrivateRouteLoggedIn exact path="/signup" component={Signup} />
              <Route exact path="/" component={Dashboard} />
              <PrivateRouteLoggedIn exact path="/login" component={Login} />
              <PrivateRouteNotLoggedIn
                exact
                path="/profile"
                component={Profile}
              />
              <PrivateRouteNotLoggedIn
                exact
                path="/update-profile"
                component={UpdateProfile}
              />
              <PrivateRouteLoggedIn
                exact
                path="/forgot-password"
                component={ForgotPassword}
              />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
  );
}

export default App;
