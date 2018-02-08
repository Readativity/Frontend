import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

class HomeFooter extends React.Component {
  render() {
    if (this.props.userInfo.id === undefined) {
      return (
        <div id="footer">
          <FooterNav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About Readativity</StyledLink>
          </FooterNav>
          <FooterSpan>&copy; 2018 Readativity, Inc.</FooterSpan>
        </div>
      );
    } else {
      return (
        <div id="footer">
          <FooterNav>
            <StyledLink to="/dashboard">Dashboard</StyledLink>
            <StyledLink to="/about">About Readativity</StyledLink>
          </FooterNav>
          <FooterSpan>&copy; 2018 Readativity, Inc.</FooterSpan>
        </div>
      );
    }
  }
}

export default HomeFooter;

const FooterNav = styled.footer`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  height: 30%;
  color: var(--light-gray);
  padding: 0.7em 0;
`;

const StyledLink = styled(Link)`
  color: var(--light-gray);
  text-decoration: none;
  margin-left: 1.5rem;
  font-size: 1.2rem;
`;

const FooterSpan = styled.span`
  color: var(--light-gray);
`;
