import React, { Component } from "react";
import Buttons from "./Buttons";
import Lost from "./Lost";
import Win from "./Win";
import Loading from "./Loading";
export default class Container extends Component {
  render() {
    let letters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    let place = letters.map((r) => (
      <Buttons action={this.props.action} key={r} lt={r} />
    ));

    return (
      <div className="s2">
        {this.props.cc === 0 ||
        this.props.wsha.length === this.props.found.length ? (
          this.props.cc === 0 ? (
            <Lost />
          ) : this.props.wsha === "" ? (
            <Loading />
          ) : (
            <Win />
          )
        ) : (
          <div>
            <h1>welcome to the game</h1>
            <h3>Guess the word before hanging the man you have 10 chances</h3>
            <div className="flex_con">{place}</div>
            <h2 className="font" style={{ marginTop: "50px" }}>
              Chanses Remain : {this.props.cc}
            </h2>
          </div>
        )}
      </div>
    );
  }
}
