import React from "react";

import QuoteGenerator from "./QuoteGenerator";
import QuoteDetail from "./QuoteDetail";

const Quote = () => {
  return (
    <div className="quote-section">
      <QuoteGenerator />
      <QuoteDetail />
    </div>
  );
};

export default Quote;
