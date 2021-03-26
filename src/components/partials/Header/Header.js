import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Pages from "../../../constants/Pages";
import Strings from "../../../constants/Strings";
import Logo from "../../../assets/logo.svg";
import "./Header.css";

const activeLinkStyle = {
  color: "orange",
};

const linkStyle = {
  paddingTop: "0.25%",
  paddingBottom: "0.25%",
};

const ContactUsButton = () => {
  return (
    <button className="ContactUsButton">
      {Strings.partials.Header.contactUsButtonText}
    </button>
  );
};

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
          <ContactUsButton />
        </div>
        {Pages.map((page) => {
          return (
            <NavLink
              to={page.path}
              key={page.path}
              activeStyle={activeLinkStyle}
              style={linkStyle}
            >
              {page.title}
            </NavLink>
          );
        })}
      </div>
    );
  }
}

export default Header;
