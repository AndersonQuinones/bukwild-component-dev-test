import React, { Component } from "react";

class Page extends Component {
  render() {
    return (
      <div>
        <p>{this.props.headline}</p>
        <p>{this.props.subhead}</p>
        <p>{this.props.cta}</p>
      </div>
    );
  }
}

export default Page;
