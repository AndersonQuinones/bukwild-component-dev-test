import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Page from "../../partials/Page/Page";
import Pages from "../../../constants/Pages";

class Header extends Component {
  render() {
    return (
      <div>
        <Router>
          {Pages.map((page) => {
            return (
              <Link to={page.path} key={page.path}>
                {page.title}
              </Link>
            );
          })}
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
      </div>
    );
  }
}

export default Header;
