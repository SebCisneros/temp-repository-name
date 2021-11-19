import React, { useState, useEffect } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { PlaidLink } from "react-plaid-link";
import axios from "axios";

const url = process.env.HER_URL || "http://localhost:1000/";

export default function Profile() {
  const [error, setError] = useState("");
  const [linkToken, setLinkToken] = useState("");
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

  useEffect(() => {
    async function getToken() {
      var response = await axios.get(url + "api/create_link_token");
      setLinkToken(response.data["link_token"]);
    }
    getToken();
  }, []);

  const handleOnSuccess = async (public_token, metadata) => {
    // send token to client server
    console.log("Hello");
    console.log(public_token);
    var data = {
      public_token: public_token,
    };
    console.log(data);
    var response = await axios.post(url + "exchange_public_token", data);
    console.log(response);
    //to do set accessToken into sessionStorage then move onto UI calls in other components.
    sessionStorage.setItem("accessToken", response.data["access_token"]);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>

        <div>
          {linkToken.toString !== "undefined" ? (
            <PlaidLink
              token={linkToken.toString()}
              env="sandbox"
              onSuccess={handleOnSuccess}
            >
              Connect Bank Account
            </PlaidLink>
          ) : null}
        </div>
      </div>
    </>
  );
}
