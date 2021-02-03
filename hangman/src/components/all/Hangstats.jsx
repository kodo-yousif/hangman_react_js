import React, { Component } from "react";

export default class Hangstats extends Component {
  render() {
    return (
      <center>
        <h2 className="hangstats yalla">{this.props.hs}</h2>
      </center>
    );
  }
}
