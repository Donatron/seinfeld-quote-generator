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
  const index = Math.floor(Math.random() * quotes.length);
  const quote = quotes[index];

  return quote;
}

export const updateImage = quote => {
  let character = quote.author.toLowerCase();
  let imagePath = characterSwitch(character);
  let imageIndex = getImageIndex();

  let imageSrc = `img/${imagePath}-${imageIndex}.jpg`;
  elements.quoteImage.setAttribute('src', imageSrc);
}

const getImageIndex = () => {
  let index = Math.ceil(Math.random() * 5);
  return index;
}

const characterSwitch = (char) => {
  switch (char) {
    case 'jerry':
      return 'jerry/jerry';
      break;
    case 'george':
      return 'george/george';
      break;
    case 'elaine':
      return 'elaine/elaine'
      break;
    case 'kramer':
      return 'kramer/kramer';
      break;
    default:
      return 'generic/generic'
  }
}

export const filterQuotes = (array, character) => {

  let filteredArray = array.filter(el => el.author.toLowerCase() === character);
  return filteredArray;
}
