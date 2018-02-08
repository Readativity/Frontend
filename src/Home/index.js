import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Login from "../login";

const Splash = props => (
  <div>
    <main id="splash-image" className="main">
      <Button
        id="login-button"
        className="splash-button"
        onClick={props.openModal}
      >
        <p>Login</p>
      </Button>
      <Button id="new-user-button" className="splash-button">
        <StyleLink to="/createaccount">Create an Account</StyleLink>
      </Button>
      <Login
        warning={props.warning}
        userInfo={props.userInfo}
        loginView={props.loginView}
        handleLogin={props.handleLogin}
        openModal={props.openModal}
        closeModal={props.closeModal}
        modalIsOpen={props.modalIsOpen}
      />
    </main>
  </div>
);

export default Splash;

const Button = styled.div`
  background-color: white;
  border: 3px solid var(--blue);
  border-radius: 8px;
  width: 70%;
  height: 4rem;
  margin: 1rem;
  font-size: 1.8em;
  font-weight: bold;
  vertically-align: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: var(--blue);

  @media (min-width: 700px) {
    width: 50%;
  }
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  color: var(--blue);
`;
