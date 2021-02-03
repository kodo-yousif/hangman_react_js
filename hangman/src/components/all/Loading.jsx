import React, { Component } from "react";

export default class Loading extends Component {
  render() {
    return (
      <div className="lding">
        <h1>
          <span role="img" aria-label="lding">
            ⌛
          </span>{" "}
          Loading...{" "}
        </h1>
      </div>
    );
  }
}
