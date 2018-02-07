import React from "react";
import { Polar } from "react-chartjs-2";

export default class CategoryReading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let labelArray=[this.props.userInfo.firstInterest, this.props.userInfo.secondInterest, this.props.userInfo.thirdInterest ];

    let firstInterestTime= 0;
    let secondInterestTime= 0;
    let thirdInterestTime= 0;

    this.props.data.forEach(activity => {
      if(activity.interest === this.props.userInfo.firstInterest) {
        firstInterestTime += activity.timeReading;
      } else if(activity.interest === this.props.userInfo.secondInterest) {
        secondInterestTime += activity.timeReading;
      } else if(activity.interest === this.props.userInfo.thirdInterest) {
        thirdInterestTime += activity.timeReading;
      }
    })

    let dataArray = [firstInterestTime, secondInterestTime, thirdInterestTime]


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
      <div id="category-reading-chart">
        <Polar data={chartData} />
      </div>
    );
  }
}
