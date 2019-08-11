import { elements } from './base';

export const renderEpisodeName = (season, episode, episodesArray) => {
  let thisEpisode = episodesArray.filter(el => parseInt(el.season) === parseInt(season) && parseInt(el.number) === parseInt(episode));

  const html = `
  <p>"${thisEpisode[0].name}"
  `;

  elements.quoteText.insertAdjacentHTML('beforeend', html);
}

export const renderSynopsis = (season, episode, episodesArray) => {
  let thisEpisode = episodesArray.filter(el => parseInt(el.season) === parseInt(season) && parseInt(el.number) === parseInt(episode));

  const html = `
    <h3>Episode Synopsis</h3>
    <p id="synopsis">${thisEpisode[0].summary}</p>
  `;

  elements.synopsis.insertAdjacentHTML('beforeend', html);
}

export const clearSynopsis = () => {
  elements.synopsis.innerHTML = '';
}
