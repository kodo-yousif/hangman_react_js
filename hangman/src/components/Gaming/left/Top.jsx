import React, { Component } from "react";

export default class Top extends Component {
  render() {
    return (
      <div className="k1">
        <h1
          style={{
            color:
              this.props.cc === 0 ||
              this.props.wsha.length === this.props.found.length
                ? this.props.cc === 0
                  ? "rgb(255, 4, 4)"
                  : "rgb(8, 231, 8)"
                : "white",
          }}
        >
          {this.props.diss}
        </h1>
      </div>
    );
  }
}
