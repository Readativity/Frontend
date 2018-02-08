import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./logo.png";

class Header extends React.Component {
  render() {
    if (this.props.userInfo.id === undefined) {
      return (
        <HeaderLogo id="header">
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
        </HeaderLogo>
      );
    } else {
      return (
        <HeaderLogo id="header">
          <Link to="/dashboard">
            <Logo src={logo} alt="logo" />
          </Link>
        </HeaderLogo>
      );
    }
  }
}

export default Header;

const Logo = styled.img`
  width: 350px;
  margin: 0.5em 0;
`;

const HeaderLogo = styled.header`
  background-color: var(--blue);
`;
