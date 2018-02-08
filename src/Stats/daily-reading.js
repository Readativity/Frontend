import React from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

export default class DailyReading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      times: []
    };
    this.dayNames = this.dayNames.bind(this);
  }

  dayNames(array) {
    return array.map(day => {
      var newDay = day.split(" ")[0];
      return newDay;
    });
  }

  render() {
    var week = {};
    for (var i = 0; i < 7; i++) {
      var key = new Date(new Date().setDate(new Date().getDate() - i)).toString().split(" ");
      key.pop();
      key.pop();
      key.pop();
      var finalKey = key.join(" ");
      week[finalKey] = 0;
    }
    console.log("week", week);
    for (let i = 0; i < this.props.data.length; i++) {
      if (week[this.props.data[i].date] !== null) {
        week[this.props.data[i].date] += this.props.data[i].timeReading;
      }
    }

    const thisWeek = Object.keys(week);

    const chartData = {
      labels: this.dayNames(thisWeek),
      datasets: [
        {
          label: "Total Minutes Reading",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#136efb",
          borderColor: "#136efb",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#fdd130",
          pointBackgroundColor: "#fdd130",
          pointBorderWidth: 5,
          pointHoverRadius: 10,
          pointHoverBackgroundColor: "#136efb",
          pointHoverBorderColor: "#fdd130",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: Object.values(week)
        }
      ]
    };
    return (
      <Container id="daily-reading-chart">
        <Title>Time Reading this Week</Title>
        <Line data={chartData} />
      </Container>
    );
  }
}

const Container = styled.div`
  padding: 1rem;
  width: 50vh;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 90vw;
  }
`;

const Title = styled.h2`
  font-size: 1.3em;
  margin: 0.7em;
`;
