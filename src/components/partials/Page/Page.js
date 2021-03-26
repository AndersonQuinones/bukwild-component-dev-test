import React, { Component } from "react";
import "./Page.css";

class Page extends Component {
  render() {
    return (
      <div className="Page row full-height">
        <div className="col-6 nopaddin">
          <p className="PageHeadline text-headline">{this.props.headline}</p>
        </div>
        <div className="col-6 nopadding">
          <p className="PageSubhead text-subhead">{this.props.subhead}</p>
        </div>

        <div className="PageFooter">
          <p className="text-callout">{this.props.cta}</p>
        </div>
      </div>
    );
  }
}

export default Page;
