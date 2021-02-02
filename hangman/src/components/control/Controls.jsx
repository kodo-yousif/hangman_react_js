import React, { Component } from "react";
import Start from "./Start";
import End from "./End";
import Restart from "./Restart";

export default class Controls extends Component {
  render() {
    return (
      <div className="controls">
        <Restart phase={this.props.phase} res={this.props.res} />
        <Start phase={this.props.phase} sgame={this.props.sgame} />
        <End phase={this.props.phase} egame={this.props.egame} />
      </div>
    );
  }
}
