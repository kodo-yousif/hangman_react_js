import React, { Component } from "react";
import "./hangman.css";

import { Container, Row, Col } from "react-bootstrap";
import Hangstats from "./all/Hangstats";
import step0 from "../assets/0.png";
import step1 from "../assets/1.png";
import step2 from "../assets/2.png";
import step3 from "../assets/3.png";
import step4 from "../assets/4.png";
import step5 from "../assets/5.png";
import step6 from "../assets/6.png";
import step7 from "../assets/7.png";
import step8 from "../assets/8.png";
import step9 from "../assets/9.png";
import step10 from "../assets/10.png";
import Loading from "./all/Loading";

export default class Hangman extends Component {
  static defaultProps = {
    maxWrong: 10,
    images: [
      step0,
      step1,
      step2,
      step3,
      step4,
      step5,
      step6,
      step7,
      step8,
      step9,
      step10,
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: "",
    };
  }

  componentDidMount() {
    fetch("https://random-word-api.herokuapp.com/word?number=1", {
      method: "Get",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res[0]);
        this.setState({ answer: res[0] });
      });
  }

  handleGuess = (x) => {
    let letter = x.target.value;
    var rt = this.state.answer.includes(letter);
    this.setState((st) => ({
      gussed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1),
    }));
    return rt;
  };

  gussedWord() {
    return this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : "_"));
  }

  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
      <button
        className="btn-warning btn btn-lg m-2"
        key={letter}
        value={letter}
        onClick={(event) => {
          var all = event.target.className.split(" ");
          if (this.handleGuess(event)) {
            all[0] = "btn-success";
          } else {
            all[0] = "btn-danger";
          }
          event.target.className = all.join(" ");
        }}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([]),
      answer: "",
    });
    this.componentDidMount();
  };

  render() {
    const gameOver = this.state.mistake <= this.maxWrong;
    const winner = this.gussedWord().join("") === this.state.answer;
    let hangStat = this.generateButtons();

    if (winner) {
      hangStat = "You Won !!";
    }
    if (gameOver) {
      hangStat = "Game Over !!!";
    }

    return (
      <Container className="hangman container fluid">
        {this.state.answer === "" ? <Loading /> : null}
        <h1 className="text-center hang shadoww wight">Hange the dude</h1>
        {this.state.mistake !== 10 ? <Hangstats hs={hangStat} /> : null}

        <div className="text-center">
          <h4 className="guess shadoww wight">Guess the category</h4>
          <h3 className="text-primary walamm wight shadoww">
            {!gameOver ? this.gussedWord() : this.state.answer}
          </h3>
        </div>

        <Row>
          <Col>
            <div className="text-center img-container">
              <img src={this.props.images[this.state.mistake]} alt="" />
            </div>
          </Col>
          <Col>
            <div
              className="float-right wight"
              style={{
                position: "absolute",
                left: "50%",
                color: "#ED2B33FF",
                fontWeight: "bolder",
              }}
            >
              <h5 style={{ textShadow: "0px 0px 3px  black" }}>
                Worng Guesses {this.state.mistake} of {this.props.maxWrong}
              </h5>
            </div>

            <button
              className="btn btn-danger"
              onClick={this.resetButton}
              style={{
                position: "absolute",
                top: "10%",
                left: "60%",
              }}
            >
              Reset
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}
