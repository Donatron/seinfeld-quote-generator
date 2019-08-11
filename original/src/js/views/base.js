export const elements = {
  option: document.querySelector('#quote-select'),
  quoteButton: document.querySelector('#quote-btn'),
  quoteImage: document.querySelector('.img-quote'),
  quoteText: document.querySelector('.quote-text'),
  quoteDetails: document.querySelector('.quote-details'),
  episodeName: document.querySelector('#episode-name'),
  synopsis: document.querySelector('.synopsis-section'),
  date: document.querySelector('#date')
}

export const elementStrings = {
  loader: 'loader'
}

export const renderLoader = parent => {
  const loader = `
    <div class="${elementStrings.loader}">
      <svg>
        <use href="./img/icons.svg#icon-cw"></use>
      </svg>
      <p>Loading....</p>
    </div>
  `;
  parent.insertAdjacentHTML('afterbegin',loader);
}

export const clearLoader = () => {
  const loader = document.querySelector(`.${elementStrings.loader}`);
  if (loader) loader.parentElement.removeChild(loader);
}

export const getDate = () => {
  let date = new Date();
  date = date.getFullYear();
  return date;
}
