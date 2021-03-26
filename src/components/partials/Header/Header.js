import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Pages from "../../../constants/Pages";
import Strings from "../../../constants/Strings";
import Logo from "../../../assets/logo.svg";
import "./Header.css";

const activeLinkStyle = {
  color: "orange",
};

function handleContactUsButtonClick() {
  // TODO - Implement click handler
  console.log("Contact Us Button Clicked!");
}

const ContactUsButton = () => {
  return (
    <button
      className="HeaderContactUsButton text-button"
      onClick={handleContactUsButtonClick}
    >
      {Strings.partials.Header.contactUsButtonText}
    </button>
  );
};

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
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
              className="HeaderNavLink text-body"
              to={page.path}
              key={page.path}
              activeStyle={activeLinkStyle}
            >
              {page.title}
            </NavLink>
          );
        })}
      </div>
    );
  }
}
