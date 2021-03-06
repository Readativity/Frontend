import React from "react";
import { Link } from "react-router-dom";
import EditLogout from "./editlogout";
import styled from "styled-components";

const Dashboard = props => (
  <main id="dashboard" className="main">
    <Welcome>Welcome to your dashboard, {props.userInfo.name}!</Welcome>
    <Break />
    <StyleLink to="/reader">
      <div>Start Reading</div>
    </StyleLink>
    <StyleLink to="/stats">
      <div>See Stats</div>
    </StyleLink>
    <Break />
    <EditLogout logout={props.logout} />
  </main>
);

export default Dashboard;

const Welcome = styled.h1`
  margin-bottom: 2rem;
  font-family: var(--open-sans);
  font-size: 1.5rem;
`;
const StyleLink = styled(Link)`
  text-decoration: none;
  width: 60%;
  background-color: var(--blue);
  border: 3px solid var(--blue);
  border-radius: 8px;
  color: white;
  font-size: 1.4em;
  font-weight: bold;
  margin: 2rem 2rem;
  padding: 1rem;
`;
const Break = styled.div`
  background-color: var(--yellow);
  height: 2px;
  margin-top: 1rem;
  width: 85%;
`;
