import React from "react";
import styled from "styled-components";
import Iframe from "./Iframe";
import NextButton from "./NextButton";

class Reader extends React.Component {
  render() {
    return (
      <div>
        <Iframe />
        <NextButton />
      </div>
    );
  }
}

export default Reader;
