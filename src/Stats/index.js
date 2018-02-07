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
    fetch("https://readativity.herokuapp.com/activity/" + userId)
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
      </main>
    );
  }
}
