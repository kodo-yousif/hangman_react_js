import React, { Component } from "react";

export default class Start extends Component {
  render() {
    return (
      <div
        className="card chbtn font"
        onClick={() => {
          this.props.sgame();
        }}
        style={{
          transform: this.props.phase === "gaming" ? "scale(0)" : "scale(1)",
        }}
      >
        Start
      </div>
    );
  }
}
