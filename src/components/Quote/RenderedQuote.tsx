import React from 'react';
import {
    Card, 
    CardBody, 
    CardTitle, 
    CardText
} from 'reactstrap';

import { Quote } from '../../models';

interface Props {
    quoteData: Quote;
}

const RenderedQuote:React.FC<Props> = ({quoteData}) => {
    const {quote, author } = quoteData;
    const getQuoteCharacter = (character: string): string => {
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

    const getQuoteImage = (character: string = ""): string => {
      let index = Math.ceil(Math.random() * 5);
      let imageCharacter = getQuoteCharacter(character);
      let imageSrc = require(`../../assets/img/${imageCharacter}/${imageCharacter}-${index}.jpg`);
  
      return imageSrc;
    };

    return (
      <div className="quote">
      <Card>
        <img
          src={getQuoteImage(author)} alt={author}
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
    )
}

export default RenderedQuote;