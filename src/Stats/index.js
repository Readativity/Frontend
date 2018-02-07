import React from "react";
import DailyReading from "./daily-reading.js";
import CategoryReading from "./reading-categories.js";

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
      </main>
    );
  }
}
