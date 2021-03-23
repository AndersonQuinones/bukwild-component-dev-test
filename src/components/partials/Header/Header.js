import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import About from "../../pages/About/About";
import Industries from "../../pages/Industries/Industries";
import Services from "../../pages/Services/Services";

class Header extends Component {
  render() {
    return (
      <div>
        <Router>
          <Link to="/industries">Industries</Link>
          <Link to="/services">Services</Link>
          <Link to="/about-us">About Us</Link>
          <Switch>
            <Route exact path="/about-us" component={About} />
            <Route exact path="/industries" component={Industries} />
            <Route exact path="/services" component={Services} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Header;
