import React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';

const About= (props)=> {
  const AboutDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
  `

  const Title = styled.h1 `
    font-size: 2rem;
    color: grey;
  `;
  const InfoContainer= styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
  `;
  const Subtitle= styled.h2 `
    font-size: 1.5rem;
  `;
  const Information= styled.p `
    margin-bottom: 1rem;
    font-size: 1rem;
    width: 50%;
    text-align: center;
  `;

  const StyledLink = styled(Link)`
      text-decoration: none;
      padding: 1rem;
      border: black solid 1px;
      background-color: red;
      color: white;
  `;

  return (
    <div className="about">
      <Title> Pocket Pooper </Title>
      <InfoContainer>
        <Subtitle> What is Pocket Pooper?</Subtitle>
        <Information> "Going "Number Two" is a great time for reading. But, we often spend more time looking for something to read than we do reading it, and that search fatigue usually means you settle for something that wasn't worth it in the first place. Worst case scenario: you get so distracted hopping from one useless article or video to the next that you completely lose track of time, forgetting where you are and what you really came to accomplish!"</Information>
        <Subtitle> Why do you need Pocket Pooper?</Subtitle>
        <Information> "Pocket Pooper solves this problem by serving quality reading material based on user-specified interests. Articles are generated based on estimated read-times, and Pocket Pooper also includes a timer to make sure you don't sit there too long."</Information>
      </InfoContainer>
        <StyledLink to="/reader">Start Reading</StyledLink>
    </div>
  )
}

export default About;
