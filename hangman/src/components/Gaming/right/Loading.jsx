import React, { Component } from "react";

export default class Loading extends Component {
  render() {
    return (
      <div className="flex2">
        <h1>
          Loading...
          <span role="img" aria-label="loading">
            ⌛
          </span>
        </h1>
      </div>
    );
  }
}
