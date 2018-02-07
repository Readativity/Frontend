import React from "react";
import styled from "styled-components";

const HistoryObject = (props) => {

  return (
    <div id="history-object">
      <Links target="_blank" href={props.activity.articleURL}>{props.activity.headline}</Links>
      <Date>{props.activity.date}</Date>
    </div>

  )
}

export default HistoryObject;


const Links = styled.a `
  grid-row: 1/2;
  grid-column: 1/2;
  justify-self: center;
  align-self:center;
  text-decoration: none;
  font-size: 1rem;
  text-align: center;
  margin-left: .5rem;
`

const Date = styled.h1 `
  grid-row: 1/2;
  grid-column: 2/3;
  font-size: .8rem;
  text-align: center;
  margin-top: 1rem;
`
