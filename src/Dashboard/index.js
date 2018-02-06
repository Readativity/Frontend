import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";


const Dashboard = (props) => (
  <main className= "main">
    <Link to="/reader">
      <Button id="begin-reading" className="dashboard-button" >
        Start Reading
      </Button>
    </Link>
    <Link to="">
      <Button id="stats-dashboard" className="dashboard-button">
        See Stats
      </Button>
    </Link>
  </main>
);

export default Dashboard;

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
