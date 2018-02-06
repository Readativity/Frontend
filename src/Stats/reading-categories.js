import React from "react";
import { Polar } from "react-chartjs-2";

export default class CategoryReading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const chartData = {
      datasets: [
        {
          data: [11, 16, 7],
          backgroundColor: ["#b1b5bd", "#136efb", "#fdd130"],
          label: "My dataset" // for legend
        }
      ],
      labels: ["Business", "Entertainment", "Health"]
    };
    return (
      <div id="category-reading-chart">
        <Polar data={chartData} />
      </div>
    );
  }
}
