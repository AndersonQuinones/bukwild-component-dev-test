import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pages from "../../../constants/Pages";
import Strings from "../../../constants/Strings";
import Logo from "../../../assets/logo.svg";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header row">
        <div className="HeaderTopRow">
          <img
            className="HeaderLogo"
            src={Logo}
            alt={Strings.partials.Header.logoAltText}
          />
          <button>{Strings.partials.Header.contactUsButtonText}</button>
        </div>
        {Pages.map((page) => {
          return (
            <Link to={page.path} key={page.path}>
              {page.title}
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Header;
