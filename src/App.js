import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./about";
import Reader from "./Reader";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userId: '',
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


    this.state.users.forEach(user => {
      if(user.username === username && user.password === password) {
        this.setState({userId:user.id})
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Splash openModal={this.openModal} closeModal={this.closeModal} handleLogin={this.handleLogin} } />
            <Route path="/about" component={About} />
            <Route path="/get-started" />
            <Route
              path="/reader"
<<<<<<< HEAD
              component={() => <Reader userId={this.state.userId} />}
=======
              component={() => <Iframe userinfo={this.state.userinfo} />}
>>>>>>> f9f0978db351ec13bb777ee8fdea7e508db4deb3
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
