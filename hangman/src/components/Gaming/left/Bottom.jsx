import React, { Component } from "react";
import m0 from "../../../assets/0.png";
import m1 from "../../../assets/1.png";
import m2 from "../../../assets/2.png";
import m3 from "../../../assets/3.png";
import m4 from "../../../assets/4.png";
import m5 from "../../../assets/5.png";
import m6 from "../../../assets/6.png";
import m7 from "../../../assets/7.png";
import m8 from "../../../assets/8.png";
import m9 from "../../../assets/9.png";
import m10 from "../../../assets/10.png";
import m99 from "../../../assets/99.png";
export default class Bottom extends Component {
  render() {
    const imag = [m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m99];
    return (
      <div
        className="k2"
        style={{ backgroundImage: `url(${imag[this.props.cc]})` }}
      ></div>
    );
  }
}
