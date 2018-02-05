import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const About = props => {
  const AboutDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Title = styled.h1`
    font-size: 2rem;
    color: grey;
  `;
  const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const Subtitle = styled.h2`
    font-size: 1.5rem;
  `;
  const Information = styled.p`
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
        <Subtitle> What is Readativity?</Subtitle>
        <Information>Readativity encourages you to make time </Information>
        <Subtitle> Why do you need Readativity?</Subtitle>
        <Information />
      </InfoContainer>
      <StyledLink to="/reader">Start Reading</StyledLink>
    </div>
  );
};

export default About;
