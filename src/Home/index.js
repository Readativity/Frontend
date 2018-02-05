import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Splash = () => (
  <main>
    <Link to="/reader">
      <div className="splash-button">Start Reading</div>
    </Link>
    <Link to="/interests">
      <div className="new-member">Not a member yet? Sign up here</div>
    </Link>
    <Link to="/stats">
      <div className="splash-button">Check Your Stats</div>
    </Link>
    <Link to="/about">
      <div className="about-link">About Readability</div>
    </Link>
  </main>
);

export default Splash;
