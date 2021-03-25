import React, { Component, Fragment } from "react";
import Header from "../partials/Header/Header";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Page from "../partials/Page/Page";
import Pages from "../../constants/Pages";

function Routes() {
  return (
    <Fragment>
      <Redirect exact from="/" to={Pages[0].path} />
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
    </Fragment>
  );
}

class App extends Component {
  render() {
    return (
      <div className="container full-height">
        <Router>
          <Header />
          <Switch>
            <Routes />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
