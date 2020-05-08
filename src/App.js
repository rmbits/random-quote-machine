import React from 'react';
import './App.css';
import data from './quotes.json'

//const API = 'https://api.jsonbin.io/b/5eb422ae8284f36af7b71ab7/2';
//const authors = data.map((item, index) => <li key={index}>{item.Quote}</li>);

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      randomIndex: 1,
      background: gradient()      
    };
    
    this.getNewQuote = this.getNewQuote.bind(this);
  }

  getNewQuote() {
    this.setState({
      randomIndex: Math.floor(Math.random() * data.length),
      background: gradient()
    });
  }

  render() {

    const quote = data[this.state.randomIndex].Quote;
    const author = data[this.state.randomIndex].Author;
    const twitterUrl = encodeURI('https://twitter.com/intent/tweet?hashtags=quotes&text="' + quote + '" - ' + author);
    
    //console.log(this.state.randomStyle)
    
    return (
      <div className="wrapper" style={{background: this.state.background}}>
        <div id="quote-box" className="quote-box">
          
          <div id="quote" className="quote" >
            <div id="text">"{quote}"</div>
            <br/>
            <div id="author"> - {author}</div>
          </div>

          <div className="buttons">
            
            <a href={twitterUrl} id="tweet-quote" className="btn btn-info" target="_blank" title="Tweet it!" rel="noopener noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
            <button id="new-quote" className="btn btn-info" onClick={this.getNewQuote}>New Quote</button>          
          </div>
          
        </div>
      </div>
    );
  }
}

// Random gradient color generator function
// Source: https://css-tricks.com/gradient-borders-in-css/
function gradient() {

  var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
  
  function populate(a) {
    for ( var i = 0; i < 6; i++ ) {
      var x = Math.round( Math.random() * 14 );
      var y = hexValues[x];
      a += y;
    }
    return a;
  }
  
  var newColor1 = populate('#');
  var newColor2 = populate('#');
  var angle = Math.round( Math.random() * 360 );
  
  var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";

  return gradient;
  
  //document.getElementById("container").style.background = gradient;
}

export default App;
