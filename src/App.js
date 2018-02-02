import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Footer from ".Footer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Router>
            <Route exact path="/" component={About}/>
            <Route path="/about" component={About}/>
            <Route path="/get-started">
            <Route path="/reader"/>
          </Router>
        <Footer />
      </div>
    );
  }
}

export default App;