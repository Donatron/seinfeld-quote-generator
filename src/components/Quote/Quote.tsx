import React from "react";
import { Container, Row } from 'reactstrap';

import QuoteGenerator from "./QuoteGenerator";
import QuoteDetail from "./QuoteDetail";

const Quote: React.FC = () => {
  return (
    <Container className="quote-container">
      <Row>
        <QuoteGenerator />
      </Row>
      <Row>
        <QuoteDetail />
      </Row>
    </Container>
  );
};

export default Quote;
