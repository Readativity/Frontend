import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";
import styled from "styled-components";

class Footer extends React.Component {
  render() {
    return (
      <FooterNav>
        <Link to="/">
          <StyledLink className="footer-nav">Home | </StyledLink>
        </Link>
        <Link to="/about">
          <StyledLink className="footer-nav">About Readativity</StyledLink>
        </Link>
        <br />
        &copy; 2018 Readativity, Inc.
      </FooterNav>
    );
  }
}

export default Footer;

const FooterNav = styled.header`
  background-color: var(--blue);
  color: var(--light-gray);
  padding: 0.7em 0;
`;

const StyledLink = styled.div`
  color: var(--light-gray);
  text-decoration: none;
`;
