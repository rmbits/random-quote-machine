import React from 'react';
import './App.css';
import data from './quotes.json'

//const API = 'https://api.jsonbin.io/b/5eb422ae8284f36af7b71ab7/2';
//const authors = data.map((item, index) => <li key={index}>{item.Quote}</li>);

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      randomIndex: 1
    };
    
    this.getNewQuote = this.getNewQuote.bind(this);
  }

  getNewQuote() {
    this.setState({
      randomIndex: Math.floor(Math.random() * data.length)
    });
  }

  render() {

    const quote = data[this.state.randomIndex].Quote;
    const author = data[this.state.randomIndex].Author;
    const twitterUrl = encodeURI('https://twitter.com/intent/tweet?hashtags=quotes&text="' + quote + '" - ' + author);

    return (
      <div className="wrapper">
        <div id="quote-box" className="quote-box">
          
          <div className="quote">
            <div id="text">{quote}</div>
            <div id="author"> - {author}</div>
          </div>

          <i className="fa fa-twitter"></i>
          <a href={twitterUrl} id="tweet-quote" className="twitterLink" target="_blank" title="Tweet it!" >Tweet</a>
          <button id="new-quote" className="btn btn-primary" onClick={this.getNewQuote}>New Quote</button>          
          
        </div>
      </div>
    );
  }
}

export default App;
