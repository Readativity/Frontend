import React from "react";
import styled from "styled-components";

function Iframe(props) {
  return <IframeElem src={props.url} />;
}

export default Iframe;

const IframeElem = styled.iframe`
  height: 100vh;
  width: 100vw;
`;
