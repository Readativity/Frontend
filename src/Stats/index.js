import React from "react";
import DailyReading from "./daily-reading.js";
import CategoryReading from "./reading-categories.js";
import StatsReturn from "./return.js";

export default class StatsDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: []
    };
  }

  componentDidMount() {
    fetch("https://readativity.herokuapp.com/activity")
      .then(response => response.json())
      .then(response => console.log(response.activity))
      .then(response => {
        this.setState({
          activity: response.activity
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <main className="main">
        <DailyReading data={this.state.activity} />
        <CategoryReading data={this.state.activity} />
        <StatsReturn />
      </main>
    );
  }
}
