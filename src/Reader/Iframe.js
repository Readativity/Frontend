import React from "react";
import styled from "styled-components";

function Iframe(props) {
  return <IframeElem src={props.article} />;
}

export default Iframe;

const IframeElem = styled.iframe`
  height: 100vh;
  width: 100vw;
`;

//TechCrunch = yes
//Time = Yes
//AP = Yes
//ESPN = Yes
//Reuters = Yes
//BBC News = Yes
//Youtube = Yes
