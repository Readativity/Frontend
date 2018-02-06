import React from "react";
import styled from "styled-components";

class NextButton extends React.Component {
  render() {
    return (
      <StyledButton>New Article </StyledButton>
    );
  }
}

export default NextButton;

const StyledButton = styled.button`
  background: #fdd130;
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Arial;
  color: #3c3c3c;
  font-size: 20px;
  width: 50%;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
`;
