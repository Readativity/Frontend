import React from "react";
import DailyReading from "./daily-reading.js";
import CategoryReading from "./reading-categories.js";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class StatsDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: []
    };
  }

  componentDidMount() {
    let userId = this.props.userInfo.id;
    console.log("userID", userId);
    fetch("https://readativity.herokuapp.com/activity/" + userId)
      .then(response => response.json())
      .then(response => {
        var activityData = response.activity;
        console.log(response.activity);
        this.setState({
          activity: activityData
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Main className="main">
        <Container>
          <Wrapper>
            <DailyReading data={this.state.activity} />
            <CategoryReading userInfo={this.props.userInfo} data={this.state.activity} />
          </Wrapper>
          <Wrapper>
            <StyledLink to="/history"> Article History </StyledLink>
          </Wrapper>
        </Container>
      </Main>
    );
  }
}

// const Container = styled.div`
//   margin-top: 0.5rem;
//   width: 100vw;
//   height: 15%;
//   display: flex;
//   flex-flow: column;
//   justify-content: center;
//   align-items: center;
// `;

const StyledLink = styled(Link)`
  background: #fdd130;
  font-family: Arial;
  color: #3c3c3c;
  font-size: 1rem;
  border-radius: 5px;
  width: 30%;
  margin: 2rem 0;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  padding 1rem 0 2rem 0;
  height: 70vh;
  overflow: scroll;
`;
