import React from "react";
import {BrowserRouter as Router , Route, Switch } from "react-router-dom";
import "./App.css";
import Background from "./components/Background";
import Hangman from './components/Hangman'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: "start",
      cc: 0,
    };
  }

  render() {
    // const imag = [m0, m1, m2, m3, m4, m5, m6];
    return (
      <>
          <Router>
            <Switch>
                <Route exact path="/play" component={Hangman}/>
            <Background/>

            </Switch>
          </Router>

      </>        
    );
  }
}
