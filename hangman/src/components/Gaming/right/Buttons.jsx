import React, { Component } from "react";

export default class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      c: "button_h work",
      first: true,
    };
  }
  render() {
    let ss = async () => {
      if (this.state.first) {
        if (await this.props.action(this.props.lt)) {
          this.setState({ c: "button_h stop green", first: false });
        } else {
          this.setState({ c: "button_h stop red", first: false });
        }
      }
    };
    return (
      <div
        onClick={() => {
          ss();
        }}
        className={this.state.c}
        style={{ width: "40px", height: "40px" }}
      >
        {this.props.lt}
      </div>
    );
  }
}
