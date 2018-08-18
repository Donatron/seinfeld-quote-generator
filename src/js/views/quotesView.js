import { elements } from './base.js';

export const renderQuote = quote => {
  const markup = `
    <p>
    The sea was angry that day my friends.
    </p>
    <p>
  `;

  elements.quoteText.insertAdjacentHTML('afterbegin', markup);
};

export const renderQuoteDetails = quote => {
  const markup = `
   George. Season 5, episode 12 "The Marine Biologist"
  `;

  elements.quoteDetails.textContent = markup;
}
