import React, { Component } from "react";

export default class End extends Component {
  render() {
    return (
      <div
        className="card chbtn font "
        style={{
          transform: this.props.phase === "gaming" ? "scale(1)" : "scale(0)",
        }}
        onClick={() => {
          this.props.egame();
        }}
      >
        End
      </div>
    );
  }
}
