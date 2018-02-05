import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";
import styled from "styled-components";
import Login from "../login";

const Splash = (props) => (
  <main>
    <Link to="">
      <Button id="login-button" className="splash-button" onClick={props.openModal}>
        Login
      </Button>
    </Link>
    <Button id="new-user-button" className="splash-button">
      Create an Account
    </Button>
    <Login handleLogin={props.handleLogin} openModal={props.openModal} closeModal={props.closeModal} modalIsOpen={props.modalIsOpen} />
  </main>
);

export default Splash;

const Button = styled.div`
  background-color: white;
  border: 3px solid var(--blue);
  border-radius: 8px;
  color: var(--blue);
  font-size: 1.4em;
  font-weight: bold;
  margin: 2rem 2rem;
  padding: 1rem;
  text-decoration: none;
`;
