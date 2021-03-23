import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Pages from "../../../constants/Pages";

class Header extends Component {
  render() {
    return (
      <Fragment>
        {Pages.map((page) => {
          return (
            <Link to={page.path} key={page.path}>
              {page.title}
            </Link>
          );
        })}
      </Fragment>
    );
  }
}

export default Header;
