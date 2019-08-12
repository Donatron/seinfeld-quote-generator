import React, { Component } from "react";
import { connect } from "react-redux";

class QuoteDetail extends Component {
  renderCharacterSwitch(character) {
    switch (character) {
      case "Jerry":
        return "jerry";
      case "George":
        return "george";
      case "Kramer":
        return "kramer";
      case "Elaine":
        return "elaine";
      default:
        return "generic";
    }
  }

  renderImage = (character = null) => {
    let index = Math.ceil(Math.random() * 5);

    let imageCharacter = this.renderCharacterSwitch(character);

    let imageSrc = require(`../../assets/img/${imageCharacter}/${imageCharacter}-${index}.jpg`);

    return imageSrc;
  };

  render() {
    const { quote, author, season, episode } = this.props.quote;

    const character = author ? author : "";

    const renderedQuote = quote ? (
      <div class="quote">
        <img src={this.renderImage(character)} alt="" class="img-quote" />
        <div class="quote-text">
          <p>{quote}</p>
          <p id="quote-details">
            {author}: Season {season}, Episode {episode}
          </p>
          <p id="episode-name">Episode title goes here from IMDB</p>
        </div>
      </div>
    ) : (
      <div id="instructions">
        <p>Click the button to view random quotes from Seinfeld.</p>
        <p>
          To see quotes by your favourite character, select from the drop down
          list
        </p>
        <br />
        <p>Thanks for stopping by. Hope you enjoy the site! :-)</p>
      </div>
    );

    return (
      <div className="Quote-Detail">
        <div className="quote-text">{renderedQuote}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quote: state.quotes.randomQuote
  };
};

export default connect(mapStateToProps)(QuoteDetail);
