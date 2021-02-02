import React, { Component } from "react";
import Top from "./Top";
import Bottom from "./Bottom";

export default class Left extends Component {
  render() {
    return (
      <div className="s1">
        <Top
          diss={this.props.diss}
          found={this.props.found}
          wsha={this.props.wsha}
          cc={this.props.cc}
        />
        <Bottom cc={this.props.cc} />
      </div>
    );
  }
}
