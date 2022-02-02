import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Row,
  Col
} from 'reactstrap';

import Synopsis from "./Synopsis";
import { Quote, Episode } from '../../models'

interface Props {
  quote: Quote,
  selectedEpisode: Episode[]
}

class QuoteDetail extends Component<Props> {
  renderCharacterSwitch(character: string): string {
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

  renderImage = (character: string = ""): string => {
    let index = Math.ceil(Math.random() * 5);

    let imageCharacter = this.renderCharacterSwitch(character);

    let imageSrc = require(`../../assets/img/${imageCharacter}/${imageCharacter}-${index}.jpg`);

    return imageSrc;
  };

  render() {
    const { quote, author, season, episode } = this.props.quote;
    const { selectedEpisode } = this.props;

    const renderedQuote: JSX.Element = quote ? (
      <div className="quote">
        <Card>
          <img
            src={this.renderImage(author)} alt={author}
            width="100%"
            className="quote-image"
          />
          <CardBody>
            <CardText>
              {quote}
            </CardText>
            <CardTitle tag="h5">
              {author}
            </CardTitle>
          </CardBody>
        </Card>
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
        <Row>
          <Col
            xs={12}
            md={{
              size: 4,
              offset: 2
            }}
          >
            {renderedQuote}
          </Col>
          <Col
            xs={12}
            md={{
              size: 4,
            }}
          >
            {this.props.selectedEpisode.length ? (
              <Synopsis episode={this.props.selectedEpisode[0]} />
            ) : (
              ""
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quote: state.quotes.randomQuote,
    selectedEpisode: state.episodes.selectedEpisode
  };
};

export default connect(mapStateToProps)(QuoteDetail);
