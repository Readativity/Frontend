import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EditLogout from "./editlogout"
import styled from "styled-components";


const Dashboard = (props) => (
  <main id="dashboard" className= "main">
    <Welcome>Welcome {props.userInfo.name}!</Welcome>
    <StyleLink to="/reader">
      <div>
        Start Reading
      </div>
    </StyleLink>
    <StyleLink to="/stats">
      <div>
        See Stats
      </div>
    </StyleLink>
    <EditLogout logout={props.logout}/>
  </main>
);

export default Dashboard;

const Welcome = styled.h1 `
  margin-bottom: 2rem;
  font-family: var(--open-sans);
  font-size: 1.5rem;
`
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
`
