import React, { Component } from "react";
import { connect } from "react-redux";
import { selectCharacter, getRandomQuote, selectEpisode } from "../../actions";

class QuoteGenerator extends Component {
  handleChange = e => {
    this.props.selectCharacter(e.target.value);
  };

  handleClick = e => {
    const { quotes, character, episodes } = this.props;

    let quote;

    if (character === "") {
      const index = Math.floor(Math.random() * quotes.length);
      quote = quotes[index];
    } else {
      const filteredQuotes = quotes.filter(quote => {
        return quote.author.toLowerCase() === character;
      });
      const index = Math.floor(Math.random() * filteredQuotes.length);
      quote = filteredQuotes[index];
    }

    this.props.getRandomQuote(quote);
  };

  render() {
    return (
      <div className="Quote-Generator">
        <select name="" id="quote-select" onChange={this.handleChange} value="">
          <optgroup label="Who would you like a quote from?">
            <option value="all">Anyone</option>
            <option value="jerry">Jerry</option>
            <option value="george">George</option>
            <option value="elaine">Elaine</option>
            <option value="kramer">Kramer</option>
          </optgroup>
        </select>
        <button onClick={this.handleClick} id="quote-btn">
          Giddyup
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes.quotes,
    character: state.quotes.character,
    episodes: state.episodes.episodes
  };
};

export default connect(
  mapStateToProps,
  { selectCharacter, getRandomQuote }
)(QuoteGenerator);
