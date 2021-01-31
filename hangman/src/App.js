import React from "react";
import "./App.css";
import m0 from "./assets/1.png";
import m1 from "./assets/2.png";
import m2 from "./assets/3.png";
import m3 from "./assets/4.png";
import m4 from "./assets/5.png";
import m5 from "./assets/6.png";
import m6 from "./assets/7.png";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: "start",
      cc: 0,
    };
  }

  render() {
    const imag = [m0, m1, m2, m3, m4, m5, m6];
    return (
      <center className="start">
        <div className="font top">Hang the dude</div>
        <div
          className="card dash"
          style={{
            transform: this.state.phase === "gaming" ? "scale(1)" : "scale(0)",
          }}
        >
          <div className="s1">
            <div className="k1"></div>
            <div
              className="k2"
              style={{ backgroundImage: `url(${imag[this.state.cc]})` }}
            ></div>
          </div>
          <div className="s2"></div>
        </div>
        <div className="controls">
          <div
            className="card chbtn font "
            style={{
              transform:
                this.state.phase === "gaming" ? "scale(1)" : "scale(0)",
            }}
            onClick={() => {
              this.setState({ cc: (this.state.cc + 1) % 7 });
            }}
          >
            Restart
          </div>
          <div
            className="card chbtn font"
            onClick={() => {
              this.setState({ phase: "gaming" });
            }}
            style={{
              transform:
                this.state.phase === "gaming" ? "scale(0)" : "scale(1)",
            }}
          >
            Start
          </div>
          <div
            className="card chbtn font "
            style={{
              transform:
                this.state.phase === "gaming" ? "scale(1)" : "scale(0)",
            }}
            onClick={() => {
              this.setState({ phase: "start" });
            }}
          >
            End
          </div>
        </div>
      </center>
    );
  }
}
