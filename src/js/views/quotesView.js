import { elements } from './base.js';

export const renderQuote = quote => {
  const markup = `
    <p>
      ${quote.quote}
    </p>
  `;

  elements.quoteText.insertAdjacentHTML('afterbegin', markup);
};

export const clearQuote = () => {
  elements.quoteText.innerHTML = '';
}

export const renderQuoteDetails = quote => {
  const markup = `
     <p>${quote.author}: Season ${quote.season}, Episode ${quote.episode} - "The Marine Biologist"</p>
  `;

  elements.quoteText.insertAdjacentHTML('beforeend', markup);
}

export const getRandomQuote = (quotes) => {
  const index = Math.floor(Math.random(quotes.length) * 100);
  const quote = quotes[index];

  return quote;
}
