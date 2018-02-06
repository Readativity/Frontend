import React from "react";
import styled from "styled-components";

class StatsReturn extends React.Component {
  render() {
    return (
      <div id="stats-dash-return">
        <StyledButton>Return to Main Dashboard</StyledButton>
      </div>
    );
  }
}

export default StatsReturn;

const StyledButton = styled.button`
  background: #fdd130;
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Arial;
  color: #3c3c3c;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
`;
