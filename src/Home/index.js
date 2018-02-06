import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";
import styled from "styled-components";
import Login from "../login";

const Splash = (props) => (
  <main className= "main">
    <Button id="login-button" className="splash-button" onClick={props.openModal}>
      Login
    </Button>
    <Link to="/createaccount">
      <Button id="new-user-button" className="splash-button">
        Create an Account
      </Button>
    </Link>
    <Login loginView={props.loginView} handleLogin={props.handleLogin} openModal={props.openModal} closeModal={props.closeModal} modalIsOpen={props.modalIsOpen} />
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
<<<<<<< HEAD
  margin: 3rem 2rem;
=======
  margin: 2rem 2rem;
>>>>>>> f9f0978db351ec13bb777ee8fdea7e508db4deb3
  padding: 1rem;
  text-decoration: none;
`;
