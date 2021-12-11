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
import FriendListPage from "./FriendListPage";
import FriendRequestListPage from "./FriendRequestListPage";
import RequestFriendListPage from "./RequestFriendListPage";

import SplitingFriendPage from "./SplitingFriendPage";


function App() {
  return (
    <div>
      
        <Router>
        <AuthProvider>
          <Navbar/>
            <Switch>

            {/* frindlist area */}
     
              <PrivateRouteLoggedIn exact path="/signup" component={Signup} />
              <Route exact path="/" component={Dashboard} />
              <Route path="/friend-list-page">
          <FriendListPage {...friendListPageData} />
        </Route>

        <Route path="/:path(|friend-request-list-page)">
          <FriendRequestListPage {...friendRequestListPageData} />
        </Route>

        <Route path="/request-friend-list-page">
          <RequestFriendListPage {...requestFriendListPageData} />
          </Route>
        <Route path="/spliting-friend-page">
          <SplitingFriendPage
            displaceReceipt="Displace receipt"
            addMoreItems="Add More Spliting"
            friend1Props={splitingFriendPageData.friend1Props}
            friend12Props={splitingFriendPageData.friend12Props}
            friend13Props={splitingFriendPageData.friend13Props}
            calculatingProps={splitingFriendPageData.calculatingProps}
          />
        </Route>




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
const splitData = {
  submitButton: "/frontend/static/img/split-button-1@2x.png",
  submit: "Submit",
};

const requestFriendListPageData = {
  temp_Name: "Temp_Name",
  friendName: "Friend Name",
  requestMessage: "Request message",
  overlapGroup1: "/frontend/static/img/split-button@2x.png",
  request: "Request",
  friendName2: "Friend Name",
  requestMessage2: "Request message",
  overlapGroup: "/frontend/static/img/split-button@2x.png",
  request2: "Request",
  friendName3: "Friend Name",
  requestMessage3: "Request message",
  overlapGroup2: "/frontend/static/img/split-button@2x.png",
  request3: "Request",
  unsure: "Friend Request",
  unsure2: "Find Friend",
  place: "Friend",
  manu_Line: "/frontend/static/img/manu-line@1x.png",
  inputType: "text",
  inputPlaceholder: "User name",
  splitProps: splitData,
};

const split22Data = {
  className: "split-1",
};

const split23Data = {
  className: "split-2",
};

const friendRequestButtonData = {
  children: "Friend Request",
};

const friendButtonData = {
  children: "Friend",
};

const friendRequestButton2Data = {
  children: "Find Friend",
  className: "friend-request-button-1",
};

const friendListPageData = {
  friendName: "Friend Name",
  friendName2: "Friend Name",
  friendName3: "Friend Name",
  manu_Line: "/frontend/static/img/manu-line@1x.png",
  temp_Name: "Temp_Name",
  split2Props: split22Data,
  split22Props: split23Data,
  friendRequestButtonProps: friendRequestButtonData,
  friendButtonProps: friendButtonData,
  friendRequestButton2Props: friendRequestButton2Data,
};

const friendRequestListPageData = {
  temp_Name: "Temp_Name",
  friendName: "Friend Name",
  requestMessage: "Request message",
  overlapGroup1: "/frontend/static/img/split-button@2x.png",
  accept: "Accept",
  friendName2: "Friend Name",
  requestMessage2: "Request message",
  overlapGroup: "/frontend/static/img/split-button@2x.png",
  accept2: "Accept",
  friendName3: "Friend Name",
  requestMessage3: "Request message",
  overlapGroup2: "/frontend/static/frontend/static/img/split-button@2x.png",
  accept3: "Accept",
  unsure: "Friend Request",
  place: "Friend",
  manu_Line: "/frontend/static/img/manu-line@1x.png",
  unsure2: "Friend Request",
  place2: "Friend",
  findFriend: "Find Friend",
  manu_Line2: "/frontend/static/img/manu-line-3@1x.png",
};

const friend12Data = {
  title: "Friend 1:",
};

const friend1Item1Data = {
  item1: "Item 1:",
};

const friend1Item12Data = {
  item1: "Item 2:",
  className: "friend-1-item-3",
};

const friend1Item13Data = {
  item1: "Item 3:",
  className: "friend-1-item-2",
};

const friend1Data = {
  friend12Props: friend12Data,
  friend1Item1Props: friend1Item1Data,
  friend1Item12Props: friend1Item12Data,
  friend1Item13Props: friend1Item13Data,
};

const friend122Data = {
  title: "Friend 2:",
};

const friend1Item14Data = {
  item1: "Item 1:",
};

const friend1Item15Data = {
  item1: "Item 2:",
  className: "friend-1-item-3",
};

const friend1Item16Data = {
  item1: "Item 3:",
  className: "friend-1-item-2",
};

const friend13Data = {
  className: "friend-2",
  friend12Props: friend122Data,
  friend1Item1Props: friend1Item14Data,
  friend1Item12Props: friend1Item15Data,
  friend1Item13Props: friend1Item16Data,
};

const friend123Data = {
  title: "Friend 3:",
};

const friend1Item17Data = {
  item1: "Item 1:",
};

const friend1Item18Data = {
  item1: "Item 2:",
  className: "friend-1-item-3",
};

const friend1Item19Data = {
  item1: "Item 3:",
  className: "friend-1-item-2",
};

const friend14Data = {
  className: "friend-3",
  friend12Props: friend123Data,
  friend1Item1Props: friend1Item17Data,
  friend1Item12Props: friend1Item18Data,
  friend1Item13Props: friend1Item19Data,
};

const calculatingData = {
  calculating: "/frontend/static/img/calculating-box@2x.png",
  calculate: "Calculate",
};

const splitingFriendPageData = {
  friend1Props: friend1Data,
  friend12Props: friend13Data,
  friend13Props: friend14Data,
  calculatingProps: calculatingData,
};

