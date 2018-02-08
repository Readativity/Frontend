import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const About = props => {
  return (
    <Container>
      <Wrapper className="main">
        <InfoContainer>
          <Subtitle> What is Readativity?</Subtitle>
          <Information>
            Readativity is where reading meets productivity! This app encourages
            you to read more while making the most of your time. You can keep
            track of how long you read everyday and check how much you read over
            the week.
          </Information>
          <Break />
          <Subtitle> Why do you need Readativity?</Subtitle>
          <Information>
            Readativity eliminates the time you spend searching for a news
            article to read by serving interest-based content as soon as
            you&#39;re ready to start reading.
          </Information>
          <Information>
            The user dashboard also allows you to keep track of your progress
            throughout the week. View your stats for total time reading per day,
            plus a breakdown of what topics you read most about.
          </Information>
          <Break />
          <Subtitle> Our Team:</Subtitle>
          <Information>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/bjcollinswebdev/"
                  target="_blank"
                >
                  BJ Collins
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kevin-kingdon/"
                  target="_blank"
                >
                  Kevin Kingdon
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mrsaxmannjr/"
                  target="_blank"
                >
                  James Mann
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/carolynselheimmiller/"
                  target="_blank"
                >
                  Carolyn Selheim-Miller
                </a>
              </li>
            </ul>
          </Information>
          <Break />
          <Subtitle> Our Code:</Subtitle>
          <Information>
            <a href="https://github.com/Readativity" target="_blank">
              View our Github Org here
            </a>
          </Information>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default About;

const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  font-size: 1rem;
  line-height: 1.3em;
  margin-top: 1rem;
  text-align: center;
  width: 85%;
`;

const Break = styled.div`
  background-color: var(--yellow);
  height: 2px;
  margin-top: 1rem;
  width: 85%;
`;

const Wrapper = styled.div`
  padding 1rem 0 2rem 0;
  height: 70vh;
  overflow: scroll;
  width: 50vw;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 100vw;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
