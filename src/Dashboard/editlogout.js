import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const EditLogout = props => {
  return (
    <Container>
      <StyledLink
        to="/"
        onClick={event => {
          props.logout(event);
        }}
      >
        Logout
      </StyledLink>
      <StyledLink to="/editaccount">Edit Settings</StyledLink>
    </Container>
  );
};

export default EditLogout;

const Container = styled.div`
  margin-top: 2rem;
  width: 60%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  color: var(--blue);
  font-family: var(--open-sans);
  text-decoration: none;
`;
