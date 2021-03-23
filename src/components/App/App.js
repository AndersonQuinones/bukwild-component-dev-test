import React, { Component } from "react";
import Header from "../partials/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page from "../partials/Page/Page";
import Pages from "../../constants/Pages";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          {Pages.map((page) => {
            return (
              <Route
                key={page.path}
                path={page.path}
                render={() => {
                  return (
                    <Page
                      headline={page.headline}
                      subhead={page.subhead}
                      cta={page.cta}
                    />
                  );
                }}
              />
            );
          })}
        </Switch>
      </Router>
    );
  }
}

export default App;
