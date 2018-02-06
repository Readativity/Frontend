import React from "react";
import styled from "styled-components";

function Iframe(props) {
  return <IframeElem src={props.url} sandbox="" />;
}

export default Iframe;

const IframeElem = styled.iframe`
  height:90%;
  width: 100vw;
`;
