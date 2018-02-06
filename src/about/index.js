import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const About = props => {


  return (
    <div>
      <div className="main">
        <Title> Readativity </Title>
        <InfoContainer>
          <Subtitle> What is Readativity?</Subtitle>
          <Information>Readativity encourages you to make time </Information>
          <Subtitle> Why do you need Readativity?</Subtitle>
          <Information>Readativity encourages you to make time </Information>
          <Subtitle> Our Team:</Subtitle>
          <Information>Bj Collins, Carolyn Selheim, James Mann, and Kevin Kingdon</Information>
          <Subtitle> Our Code:</Subtitle>
          <Information><a href="https://github.com/Readativity/Frontend" target="_blank">View Our Code Here</a></Information>
        </InfoContainer>
      </div>
    </div>
  );
};

export default About;

const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 1rem;
`;
const Information = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  width: 50%;
  text-align: center;
`;
