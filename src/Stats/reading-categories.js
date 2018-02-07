import React from "react";
import { Polar } from "react-chartjs-2";
import styled from "styled-components";

export default class CategoryReading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let labelArray = [
      this.props.userInfo.firstInterest,
      this.props.userInfo.secondInterest,
      this.props.userInfo.thirdInterest
    ];

    let firstInterestTime = 0;
    let secondInterestTime = 0;
    let thirdInterestTime = 0;

    this.props.data.forEach(activity => {
      if (activity.interest === this.props.userInfo.firstInterest) {
        firstInterestTime += activity.timeReading;
      } else if (activity.interest === this.props.userInfo.secondInterest) {
        secondInterestTime += activity.timeReading;
      } else if (activity.interest === this.props.userInfo.thirdInterest) {
        thirdInterestTime += activity.timeReading;
      }
    });

    let dataArray = [firstInterestTime, secondInterestTime, thirdInterestTime];

    const chartData = {
      datasets: [
        {
          data: dataArray,
          backgroundColor: ["#b1b5bd", "#136efb", "#fdd130"],
          label: "My dataset" // for legend
        }
      ],
      labels: labelArray
    };
    return (
      <Container id="category-reading-chart">
        <Title>Time Reading by Interest</Title>
        <Polar data={chartData} />
      </Container>
    );
  }
}

const Container = styled.div`
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 1.3em;
  margin: 0.7em;
`;
