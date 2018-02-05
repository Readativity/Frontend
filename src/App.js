import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./about";
import Reader from "./Reader";
import Splash from "./Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userInfo: {},
      modalIsOpen: false
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  openModal() {
    this.setState({modalIsOpen: true});
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleLogin(e) {
    e.preventDefault();
    let username = e.target[0].value;
    let password = e.target[1].value;
    console.log(username)
    console.log(password)

    this.state.users.forEach(user => {
      if(user.username === username && user.password === password) {
        this.setState({userInfo:user})
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route
              exact path="/"
              component={() => <Splash openModal={this.openModal} closeModal={this.closeModal} modalIsOpen={this.state.modalIsOpen} handleLogin={this.handleLogin} />}
              />
            <Route path="/about" component={About} />
            <Route path="/get-started" />
            <Route
              path="/reader"
              component={() => <Reader userInfo={this.state.userInfo} />}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
