import React, {Component} from 'react';
import classes from './TextArea.module.css'
import axios from 'axios';
//import ButtonTweet from '../ButtonTweet/ButtonTweet'

class TextArea extends Component {

    state = {
        quote: null,
        author:null,
        bgColor: null
    }
    
    componentDidMount() {

        this.handleClick();
    }

        handleClick = () => {

            const colors = ['#ADEFD1FF', '#D6ED17FF', '#ED2B33FF', '#FEE715FF', '#2BAE66FF', '#FAEBEFFF', '#F2EDD7FF', '#F1F4FFFF', '#D7A9E3FF']
            const randNum = Math.floor(Math.random()*9);
            const selectColor = colors[randNum];

            const element = document.getElementById('quote-box')
            element.style.setProperty('--bgColor', selectColor)
    
            axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
          .then(response => {
            console.log(response);

            if(response.data[0].quote.length <= 125) {
                this.setState({
                    quote: response.data[0].quote,
                    author: response.data[0].character,
                    bgColor: selectColor
                })
            } else {
                this.setState({
                    quote: "Last night's 'Itchy and Scratchy' was, without a doubt, the worst episode ever.",
                    author: "Comic Book Guy"
                })
            }
            
            console.log(response.data[0].quote);
            console.log(response.data[0].character);
            console.log(this.state);
        })
        .catch(err => {
            console.log(err);
        });

        }

    
    render() {

        const href_value = 'https://twitter.com/intent/tweet?text="' + this.state.quote +'" by ' + this.state.author
        return(
            <div className={classes.TextArea}>
                <div id="text" className={classes.quote}>
                    <h1><em>"{this.state.quote}"</em></h1>
                </div>
    
                <div id="author" className={classes.author}>
                    <h3>- {this.state.author}</h3>
                </div>
                <a id="tweet-quote" target="_blank"
                  href={href_value}
                  className={classes.tweet}
                  >
                Tweet
                </a>
                <button id="new-quote" className={classes.btn} onClick={this.handleClick}>
                    New Quote
                </button>

           
            </div>
        )
    }
} 

export default TextArea;