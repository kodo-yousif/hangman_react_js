import React, { Component } from "react";
import Right from "./right/Container";
import Left from "./left/Container";

export default class Gaming extends Component {
  componentDidMount() {
    fetch("https://random-word-api.herokuapp.com/word?number=1", {
      method: "Get",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.props.the_word(res[0].toUpperCase());
      });
  }

  render() {
    return (
      <div className="card dash">
        <Left
          diss={this.props.diss}
          found={this.props.found}
          wsha={this.props.wsha}
          cc={this.props.cc}
        />
        <Right
          action={this.props.action}
          cc={this.props.cc}
          found={this.props.found}
          wsha={this.props.wsha}
        />
      </div>
    );
  }
}
