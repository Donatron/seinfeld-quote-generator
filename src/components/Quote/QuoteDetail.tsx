import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from 'reactstrap';

import Synopsis from "./Synopsis";
import { Quote, Episode } from '../../models'
import QuoteInstructions from "./QuoteInstructions";
import RenderedQuote from "./RenderedQuote";

interface Props {
  quote: Quote,
  selectedEpisode: Episode[]
}

class QuoteDetail extends Component<Props> {
  render() {
    const { quote } = this.props;
    
    return (
      quote ? 
      <div className="Quote-Detail">
        <Row>
          <Col xs={12} md={{size: 6}} >
            <RenderedQuote quoteData={quote} />
          </Col>
          <Col xs={12} md={{ size: 6}}>
            {
            this.props.selectedEpisode.length ? (
              <Synopsis episode={this.props.selectedEpisode[0]} />
            ) : (
              ""
            )
            }
          </Col>
        </Row>
      </div>
      : <QuoteInstructions />
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
