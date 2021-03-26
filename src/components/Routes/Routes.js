import React from "react";
import { Route } from "react-router-dom";
import Page from "../partials/Page/Page";
import Pages from "../../constants/Pages";
import Footer from "../partials/Footer/Footer";

const setBackground = (img) => {
  const url = require(`../../assets/${img}`).default;

  document.body.style.background = `url(${url}) no-repeat center center fixed`;
  document.body.style.backgroundSize = "cover";
};

export default function Routes() {
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
                <>
                  <Page headline={page.headline} subhead={page.subhead} />
                  <Footer cta={page.cta} />
                </>
              );
            }}
          />
        );
      })}
    </>
  );
}
