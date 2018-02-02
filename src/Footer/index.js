import React from "react";
import styled from "styled-components";

class Footer extends React.Component {
  render() {
    return (
      <HeaderLogo>
        <h2><span className="one">Poopodoro</span> <span className="two">Power</span></h2>
      </HeaderLogo>
    );
  }
}

export default Footer;

const HeaderLogo = styled.header`
section {
  width: 50%;
  margin: 0 auto;
}

h2, h3 {
  text-align: center;
}

h2 {
  font-family: Futura, Helvetica, sans-serif;
  color: white;
}


h3 {
  font-family: 'Satisfy', 'Rock Salt', Baskerville;
}

p {
  font-family: Baskerville, serif;
}

h2 span.one, h2 span.two  {
  position: relative;
  display: block;
  width: 50%;
  margin: .25em 25%;
  background: orange;
}

span.one:after, span.two:before {
  content: "";
  position: absolute;
  bottom: 0;
  top: 0;
  background: orange;
  width: 9999px
}

span.one:after {
  left: 100%;
}

span.two:before {
  right: 100%;
}

span.one:before, span.two:after {
  content: "";
  position: absolute;
  display: block;
  border: 0.7em solid orange;
}

span.one:before {
  left: -1em;
  border-right-width: 0.7em;
  border-left-color: transparent;
}

span.two:after {
  right: -1em;
  top: 0;
  border-left-width: 0.7em;
  border-right-color: transparent;

}
`;
