import React from "react";
import Header from "../partials/Header/Header";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "../Routes/Routes";

export default function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </div>
  );
}
