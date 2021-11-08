import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    setConfirmation("");
    setError("");
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      const data = {
        "userName": emailRef.current.value
      } 
      await signup(emailRef.current.value, passwordRef.current.value);
      await axios.post("http://localhost:1000/newUser", data);
      setConfirmation("User Created");
      setLoading(true);
    } catch (err) {
      console.log(err);
      setError("Failed to create an account");
    }
    setLoading(false);
  }
  return (

      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center-mt-4">Sign Up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {confirmation && <Alert variant="success">{confirmation}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email </Form.Label>
                  <Form.Control
                    placeholder="Email"
                    type="email"
                    ref={emailRef}
                    requried
                  />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    placeholder="Password"
                    type="password"
                    ref={passwordRef}
                    requried
                  />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    placeholder="Password Confirmation"
                    type="password"
                    ref={passwordConfirmRef}
                    requried
                  />
                </Form.Group>

                <Button
                  disabled={loading}
                  type="submit"
                  className="w-100 text-center mt-2"
                >
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have an Account <Link to="/login">Log In</Link>
          </div>
        </div>
      </Container>
  
  );
}
