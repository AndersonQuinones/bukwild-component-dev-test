import React, { Component } from "react";
import "./Page.css";

export default class Page extends Component {
  render() {
    return (
      <div className="Page">
        <div className="PageContent">
          <div className="text-headline">{this.props.headline}</div>
          <div className="text-subhead">{this.props.subhead}</div>
        </div>
      </div>
    );
  }
}
