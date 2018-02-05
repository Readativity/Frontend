import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./about";
import CreateAccount from "./Form";
import Reader from "./Reader";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <Route exact path="/" component={About} />
            <Route path="/" component={CreateAccount} />
            <Route path="/about" component={About} />
            <Route path="/get-started" />
            <Route path="/reader" component={Reader} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
