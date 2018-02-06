import React from "react";
import { Line } from "react-chartjs-2";

export default class DailyReading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const chartData = {
      labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
      datasets: [
        {
          label: "My First dataset",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#fdd130",
          borderColor: "#136efb",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#136efb",
          pointBackgroundColor: "#fdd130",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#136efb",
          pointHoverBorderColor: "#fdd130",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [15, 9, 8, 11, 25, 6, 17]
        }
      ]
    };
    return (
      <div id="daily-reading-chart">
        <Line data={chartData} />
      </div>
    );
  }
}
