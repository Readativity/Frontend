import React from "react";
import { Line } from "react-chartjs-2";

export default class DailyReading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.dayNames = this.dayNames.bind(this);
  }

  componentDidMount() {
    var data = this.props.data;
    var week = {};
    for (var i = 0; i < 7; i++) {
      var key = new Date(new Date().setDate(new Date().getDate() - i)).toString().split(" ");
      key.pop();
      key.pop();
      key.pop();
      var finalKey = key.join(" ");
      week[finalKey] = 0;
    }
    for (let i = 0; i < data.length; i++) {
      if (week[data[i].date] !== null) {
        week[data[i].date] += data[i].timeReading;
      }
    }
    this.setState({
      dates: Object.keys(week),
      times: Object.values(week)
    });
  }

  dayNames(array) {
    return array.map(day => {
      var newDay = day.split(" ")[0];
      return newDay;
    });
  }

  render() {
    const chartData = {
      labels: this.dayNames(this.state.dates),
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
          data: this.state.times
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
