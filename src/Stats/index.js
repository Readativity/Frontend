import React from "react";
import DailyReading from "./daily-reading.js";
import CategoryReading from "./reading-categories.js";
import {Link } from "react-router-dom";
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
      <main className="main">
        <DailyReading data={this.state.activity} />
        <CategoryReading userInfo={this.props.userInfo} data={this.state.activity} />
        <Container>
          <StyledLink to="/history"> Article History </StyledLink>
        </Container>
      </main>
    );
  }
}

const Container= styled.div `
  margin-top: .5rem;
  width: 100vw;
  height: 15%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`

const StyledLink = styled(Link) `
  background: #fdd130;
  font-family: Arial;
  color: #3c3c3c;
  font-size: 1rem;
  border-radius: 5px;
  width: 30%;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
`;
