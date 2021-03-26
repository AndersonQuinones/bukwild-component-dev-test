import React from "react";
import Header from "../partials/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page from "../partials/Page/Page";
import Pages from "../../constants/Pages";

const setBackground = (img) => {
  const url = require(`../../assets/${img}`).default;

  document.body.style.background = `url(${url}) no-repeat center center fixed`;
  document.body.style.backgroundSize = "cover";
};

function Routes() {
  return (
    <>
      {Pages.map((page) => {
        return (
          <Route
            key={page.path}
            path={page.path}
            render={() => {
              setBackground(page.background);
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
    </>
  );
}

const App = () => {
  return (
    <div>
      <div className="container full-height">
        <Router>
          <Header />
          <Switch>
            <Routes />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
