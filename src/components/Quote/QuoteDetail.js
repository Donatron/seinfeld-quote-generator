import React, { Component } from "react";
import { connect } from "react-redux";

class QuoteDetail extends Component {
  render() {
    const { quote, author, season, episode } = this.props.quote;

    return (
      <div className="Quote-Detail">
        <div class="quote">
          <img src="img/elaine/elaine-4.jpg" alt="" class="img-quote" />
          <div class="quote-text">
            <p>{quote}</p>
            <p id="quote-details">
              {author}: Season {season}, Episode {episode}
            </p>
            <p id="episode-name">Episode title goes here from IMDB</p>
          </div>
        </div>
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
