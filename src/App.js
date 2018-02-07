import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./about";
import Reader from "./Reader";
import Splash from "./Home";
import Header from "./Header";
import CreateAccount from "./Form";
import Dashboard from "./Dashboard";
import Stats from "./Stats";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userInfo: {},
      modalIsOpen: false,
      loginView: "form",
      warning: false,
      warningUsername: false,
      confirmUser: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.submitHandlerSignUp = this.submitHandlerSignUp.bind(this);
    this.checkUserName = this.checkUserName.bind(this);
    this.logout = this.logout.bind(this);
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
        this.setState({ warning: true });
      }
    });
  }

  checkUserName(event) {
    this.state.users.forEach(user => {
      if (user.username === event.target.value) {
        this.setState({ warningUsername: true });
        setTimeout(() => {
          this.setState({ warningUsername: false });
        }, 3000);
      }
    });
  }

  handleSignUp(event) {
    const data = new FormData(event.target);
    const checkboxArray = document.querySelectorAll(".checkbox");
    const catagoriesArray = [];
    for (let i = 0; i < checkboxArray.length; i++) {
      if (checkboxArray[i].checked) {
        catagoriesArray.push(checkboxArray[i].value);
      }
    }
    const form = {
      username: data.get("username"),
      password: data.get("password"),
      name: data.get("name"),
      email: data.get("email"),
      firstInterest: catagoriesArray[0],
      secondInterest: catagoriesArray[1],
      thirdInterest: catagoriesArray[2]
    };
    event.target.reset();
    console.log(form);
    return form;
  }

  submitHandlerSignUp(event) {
    event.preventDefault();
    fetch("https://readativity.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify(this.handleSignUp(event)),
      headers: new Headers({ "Content-Type": "application/json" })
    })
      .then(response => response.json())
      .then(response => {
        let oldUsers = this.state.users;
        oldUsers.push(response.users);
        this.setState({ users: oldUsers });
      })
      .then(this.setState({ confirmUser: true }))
      .then(
        setTimeout(() => {
          this.setState({ confirmUser: false });
        }, 5000)
      )
      .catch(err => console.log(err));
  }

  logout() {
    this.setState({ userInfo: {} });
    this.closeModal();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header userInfo={this.state.userInfo} />
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
            <Route
              path="/createaccount"
              component={() => (
                <CreateAccount
                  handleSignUp={this.handleSignUp}
                  submitHandlerSignUp={this.submitHandlerSignUp}
                  checkUserName={this.checkUserName}
                  warningUsername={this.state.warningUsername}
                  confirmUser={this.state.confirmUser}
                />
              )}
            />
            <Route
              path="/dashboard"
              component={() => (
                <Dashboard
                  userInfo={this.state.userInfo}
                  logout={this.logout}
                />
              )}
            />
            <Route
              path="/stats"
              component={() => <Stats userInfo={this.state.userInfo} />}
            />
            <Route
              path="/reader"
              component={() => <Reader userInfo={this.state.userInfo} />}
            />
            <Footer userInfo={this.state.userInfo} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
