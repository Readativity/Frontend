import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./about";
import Iframe from "./Reader/Iframe";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("https://readativity.herokuapp.com/users")
      .then(response => response.json())
      .then(userinfo => {
        this.setState({
          users: userinfo.profiles
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={About} />
            <Route path="/about" component={About} />
            <Route path="/get-started" />
            <Route
              path="/reader"
              component={() => <Iframe userinfo={this.state.userinfo} />}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
