import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Stats extends Component {
  render() {
    return (
      <div className="flexx">
        <div>
          <h4
            style={{ display: this.props.show ? "block" : "none" }}
            className="h shadoww"
          >
            Worng Guesses {this.props.mistake} of {this.props.maxWrong}
          </h4>
          <div>
            <button
              className={
                this.props.show
                  ? "btn mm bc_bl"
                  : this.props.win
                  ? "btn mm green"
                  : "btn mm red"
              }
              style={{ color: "white" }}
              onClick={this.props.resetButton}
            >
              Reset
            </button>
            <Link to="/" className="mm btn btn-warning">
              End
            </Link>
          </div>

          <h3
            style={{ display: this.props.show ? "block" : "none" }}
            className="hint shadoww"
          >
            Hint : {this.props.answer.substring(2, 4)}
          </h3>
        </div>
      </div>
    );
  }
}
