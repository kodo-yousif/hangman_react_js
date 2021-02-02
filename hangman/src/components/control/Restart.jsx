import React, { Component } from "react";

export default class Restart extends Component {
  render() {
    return (
      <div
        className="card chbtn font "
        style={{
          transform: this.props.phase === "gaming" ? "scale(1)" : "scale(0)",
        }}
        onClick={this.props.res}
      >
        Restart
      </div>
    );
  }
}
