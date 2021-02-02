import React, { Component } from 'react'
import './hangman.css'
import {randomWord} from './Word.js'
import {Container,Row,Col} from 'react-bootstrap'

import step0 from '../assets/0.png'
import step1 from '../assets/1.png'
import step2 from '../assets/2.png'
import step3 from '../assets/3.png'
import step4 from '../assets/4.png'
import step5 from '../assets/5.png'
import step6 from '../assets/6.png'
import step7 from '../assets/7.png'
import step8 from '../assets/8.png'
import step9 from '../assets/9.png'
import step10 from '../assets/10.png'




export default class Hangman extends Component {

    static defaultProps = {
        maxWrong:10,
        images:[step0,step1,step2,step3,step4,step5,step6,step7,step8,step9,step10],
    }


    constructor(props){
        super(props);
        this.state = {
            mistake:0,
            guessed:new Set([]),
            answer:randomWord()

        }
    }


  handleGuess= x => {
        let letter = x.target.value;
        this.setState(st => ({
            gussed : st.guessed.add(letter),
            mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
        }))  
  }

    gussedWord(){
        return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : "_"));
    }

    generateButtons(){
        return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
           <button
           className="btn btn-lg btn-warning m-2"
           key={letter}
           value={letter}
           onClick={this.handleGuess}
           disabled={this.state.guessed.has(letter)}
           >{letter}</button> 
        ));

    }


    resetButton= () => {
         this.setState({
             mistake:0,
             guessed: new Set([]),
             answer:randomWord(),
         })
    }

    render() {
        const gameOver = this.state.mistake <= this.maxWrong;
        const winner = this.gussedWord().join("") === this.state.answer;
        let hangStat=this.generateButtons();


        if (winner) {
            hangStat = "You Won !!"
        }
        if (gameOver){
            hangStat= "Game Over !!!";
        }

        return (
            <Container className="hangman container fluid">
                
                <h1 className="text-center hang">Hangman</h1>
                     <p className="hangstat">
                        {hangStat}
                     </p>
                    <div className="text-center">
                        <p className="guess">Guess the category</p>
                         <p>
                         {!gameOver ? this.gussedWord() : this.state.answer}
                         </p>
                            
                     </div>  
             
                  
                <Row>
              
                <Col>
                <div className="text-center img-container">
                    <img src={this.props.images[this.state.mistake]} alt=""/>
                </div>
                </Col> 
                <Col>
                <div className="float-right" style={{
                     position:"absolute",
                     left:"50%",
                     color:"#ED2B33FF",
                     fontWeight:"bolder"
                }} >Worng Guesses  {this.state.mistake} of {this.props.maxWrong}</div>

                <button className="btn btn-danger" onClick={this.resetButton} style={{
                    position:"absolute",
                    top:"10%",
                    left:"60%"
                }}>Reset</button>
              

                </Col>
            
                </Row>
                
                  

             
            </Container>
        )
    }
}
