import React, { Component } from 'react'
import { PageHeader, Grid, Row, Alert, Button } from 'react-bootstrap'
import styles from './styles.scss'
import Navigation from '../navigation/navigation'
import About from '../about/about'

class PuzzleBangItem extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={"PuzzleBangItem" + (this.props.centered ? ' BottomItem' : '')}>
				<h3 className={"PuzzleBang__itemHeader" + (this.props.centered ? ' centered-faq-big' : '')}>{this.props.header}</h3>
				<p className={(this.props.centered ? ' centered-faq-big' : '')}>{this.props.children}</p>
			</div>

		);
	}
}

class PuzzleBang extends Component {
    
    constructor() {
        super()
    }
    
    render() {

      const column = {
        width: '50%',
        display: 'inline-block',
      }
  
      let faqs = [[
        {question: "What is it?", answer: ["PuzzleBang is an puzzle contest that takes place over the course of a week.  Puzzles are released online at ", <a href='https://puzzlebang.com' target='_blank'>puzzlebang.com</a>, "roughly one per day until Saturday, when we release several hard puzzles and a physical, on-campus metapuzzle that pulls everything together.  In the last two years, PuzzleBang also included a real life escape room (themed to, but otherwise unrelated to the puzzlebang.com puzzles)."]},
        {question: "Who's eligible?", answer: ["Anyone can play! We recommend teams of no more than four human beings (mostly because that's what we're budgeting our prizes at). If you haven't met any other friends that are interested in playing, drop us a line at GameControl@puzzlebang.com and we'll see about pairing you up with a new friend or two."]},
        {question: "What you will need to have", answer: "Access to a functional human brain, an internet connection (ideally at or better than 28.8kb), and a computer with a good web browser. A mobile device (smartphone, laptop, tablet, dumbphone with a friend at a computer on the other end, etc) with internet capabilities might be useful for Friday and Saturday."}
      ], [
        {question: "What you need to know", answer: "Everything! No, just kidding. Wikipedia's classical cipher's page might be useful. Number of letters in the alphabet, number of cards in a deck, all the US state abbreviations, and silly other things that you've probably run across in your daily life. Some awareness of the recent memes and popular culture will probably be helpful. Knowledge of current events at UIUC and the campus layout will be really helpful."},
        {question: "What you don't need to know", answer: "How to code. It might be useful to be able to write a script to print out all the ways you can rearrange a set of letters, or apply different ciphers to them, but in general, you should be able to do everything by hand, or ask Google and find a tool online to do it for you"},
      ]];
  
      let columns = faqs.map( (col) => {
        let colItems = col.map( (item) => {
          return (
            <PuzzleBangItem header={item.question}>
              {item.answer}
            </PuzzleBangItem>
          );
        });
  
        return (
          <div className="FAQ_list_column">
            {colItems}
          </div>
        );
      });
      let centeredContactQ = {question: "Other questions?", answer: ["Please don't hesitate to reach out to us at ", <a href='mailto:conference-chair@acm.illinois.edu '>conference-chair@acm.illinois.edu </a>, "!"]};
      return(
        <div className="PuzzleBang">
          <div className="container">
            <h1>PuzzleBang</h1>
            <div className="spacer" />
            <div className="PuzzleBang_list">
              {columns}
            </div>
            <PuzzleBangItem className="contactFAQ" header={centeredContactQ.question} centered={true}>
              {centeredContactQ.answer}
            </PuzzleBangItem>
          </div>
        </div>
          );
      }
}

export default PuzzleBang;
