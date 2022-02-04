import React from 'react';
import {Col } from 'reactstrap';

const QuoteInstructions:React.FC = () => {
    return (
      <Col xs={12} id="instructions">
      <p>Click the button to view random quotes from Seinfeld.</p>
      <p>
        To see quotes by your favourite character, select from the drop down
        list
      </p>
      <br />
      <p>Thanks for stopping by. Hope you enjoy the site! :-)</p>
    </Col>
    )
}

export default QuoteInstructions;