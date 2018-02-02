import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
<<<<<<< HEAD
// import Header from "./Header";
import About from "./about";
import Iframe from "./Reader/Iframe"
// import Footer from ".Footer";

=======
import About from "./about";
import Iframe from "./Reader/Iframe";
>>>>>>> d3ccee7ecd19cb7a77a1d315c88ec8a807b9358a

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD

          <Router>
            <div>
              <Route exact path="/" component={About}/>
              <Route path="/about" component={About}/>
              <Route path="/get-started"/>
              <Route path="/reader" component={Iframe}/>
            </div>
          </Router>

=======
        <Router>
          <div>
            <Route exact path="/" component={About} />
            <Route path="/about" component={About} />
            <Route path="/get-started" />
            <Route path="/reader" component={Iframe} />
          </div>
        </Router>
>>>>>>> d3ccee7ecd19cb7a77a1d315c88ec8a807b9358a
      </div>
    );
  }
}

export default App;
<<<<<<< HEAD
=======

>>>>>>> d3ccee7ecd19cb7a77a1d315c88ec8a807b9358a
