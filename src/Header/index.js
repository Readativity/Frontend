import React from "react";
import "../App.css";
import styled from "styled-components";
import logo from "./logo.png";

class Header extends React.Component {
  render() {
    return (
      <HeaderLogo id="header">
        <Logo src={logo} alt="logo" />
      </HeaderLogo>
    );
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
