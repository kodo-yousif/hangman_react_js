import React from "react";
import "./App.css";
import Start from "./components/Start";
import Controls from "./components/control/Controls";
import Gaming from "./components/Gaming/Gaming";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: "start",
      cc: 10,
      wsha: "",
      diss: "",
      found: [],
      game: false,
    };
  }

  render() {
    let action = (pit) => {
      let joining = [];
      for (let i = 0; i < this.state.wsha.length; i++) {
        if (this.state.wsha.charAt(i) === pit) {
          joining.push(i);
        }
      }
      var joined = this.state.found.concat(joining);
      this.setState({ found: joined });

      if (joining.length === 0) {
        this.setState({
          cc: this.state.cc === 0 ? 10 : (this.state.cc - 1) % 11,
        });
        return false;
      } else {
        updt();
        return true;
      }
    };

    let sgame = () => {
      this.setState({ phase: "gaming", game: true });
    };

    let egame = () => {
      this.setState({
        phase: "start",
        cc: 10,
        wsha: "",
        diss: "",
        found: [],
        game: false,
      });
    };

    let the_word = (w) => {
      console.log(w);
      this.setState({ wsha: w });
      updt();
    };

    let updt = () => {
      setTimeout(() => {
        let n = "";
        for (let i = 0; i < this.state.wsha.length; i++) {
          if (this.state.found.indexOf(i) > -1) {
            n = n + " " + this.state.wsha.charAt(i);
          } else {
            n = n + " _";
          }
        }
        this.setState({ diss: n });
        console.log(this.state.wsha);
      }, 50);
    };

    let res = () => {
      this.setState({
        phase: "gaming",
        cc: 10,
        wsha: "",
        diss: "",
        found: [],
        game: false,
      });
      setTimeout(() => {
        this.setState({ game: true });
      }, 100);
    };
    return (
      <center className="start">
        <Start />
        {this.state.game && (
          <Gaming
            the_word={the_word}
            diss={this.state.diss}
            action={action}
            found={this.state.found}
            wsha={this.state.wsha}
            cc={
              this.state.found.length === this.state.wsha.length &&
              this.state.wsha !== ""
                ? 11
                : this.state.cc
            }
          />
        )}
        <Controls
          phase={this.state.phase}
          sgame={sgame}
          egame={egame}
          res={res}
        />
      </center>
    );
  }
}
