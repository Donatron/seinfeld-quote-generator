import React, { Component } from "react";
import { connect } from "react-redux";

import Synopsis from "./Synopsis";

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
    const { selectedEpisode } = this.props;

    const character = author ? author : "";

    const renderedQuote = quote ? (
      <div className="quote">
        <img src={this.renderImage(character)} alt="" className="img-quote" />
        <div className="quote-text">
          <p>{quote}</p>
          <p id="quote-details">
            {author}: Season {season}, Episode {episode}
          </p>
          <p id="episode-name">
            <em>"{selectedEpisode ? selectedEpisode[0].name : ""}"</em>
          </p>
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
        {this.props.selectedEpisode.length ? (
          <Synopsis episode={this.props.selectedEpisode[0]} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quote: state.quotes.randomQuote,
    selectedEpisode: state.episodes.selectedEpisode
  };
};

export default connect(mapStateToProps)(QuoteDetail);
