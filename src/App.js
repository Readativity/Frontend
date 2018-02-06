import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./about";
import Reader from "./Reader";
import Splash from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import CreateAccount from "./Form";
import Dashboard from "./Dashboard";
import Stats from "./Stats";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userInfo: {},
      modalIsOpen: false,
      loginView: "form",
      warning: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    fetch("https://readativity.herokuapp.com/users")
      .then(response => response.json())
      .then(userinfo => {
        this.setState({
          users: userinfo.profiles,
        });
      })
      .catch(err => console.log(err));
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleLogin(e) {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    this.state.users.forEach(user => {
      if (user.username === username && user.password === password) {
        this.setState({ userInfo: user });
        this.setState({ loginView: "link" });
      } else {
        this.setState({warning:true})
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <Route
              exact
              path="/"
              component={() => (
                <Splash
                  warning={this.state.warning}
                  userInfo={this.state.userInfo}
                  loginView={this.state.loginView}
                  openModal={this.openModal}
                  closeModal={this.closeModal}
                  modalIsOpen={this.state.modalIsOpen}
                  handleLogin={this.handleLogin}
                />
              )}
              />
            <Route path="/about" component={About} />
            <Route path="/createaccount" component={CreateAccount} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/stats" component={Stats} />
            <Route path="/reader" component={() => <Reader userInfo={this.state.userInfo} />} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
