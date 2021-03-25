import React, { Component } from "react";
import "./Page.css";

class Page extends Component {
  render() {
    return (
      <div className="Page row full-height">
        <div className="PageContent col">
          <div className="row">
            <div className="PageHeadline col-6">
              <p>{this.props.headline}</p>
            </div>
            <div className="PageSubhead col-6">
              <p>{this.props.subhead}</p>
            </div>
          </div>
        </div>
        <div className="PageFooter">
          <div>{this.props.cta}</div>
        </div>
      </div>
    );
  }
}

export default Page;
