import React from "react";
import HistoryObject from './historyobject'


class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: []
    }
  }
  componentDidMount() {
    let userId = this.props.userInfo.id;
    fetch("https://readativity.herokuapp.com/activity/" + userId)
      .then(response => response.json())
      .then(response => {
        var activityData = response.activity;
        this.setState({
          activity: activityData
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    let activityArray = this.state.activity;
    activityArray.sort(function(a,b){
    return b.id - a.id;
  })

    return (
      <ul id="history">
      {activityArray.map(act => <HistoryObject key={act.id} activity={act} /> )}
      </ul>
    )

  }
}


export default History;
