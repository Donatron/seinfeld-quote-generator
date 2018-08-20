import Quote from './models/Quote';
import * as quotesView from './views/quotesView';
import * as synopsisView from './views/synopsisView';
import { elements } from './views/base';
import axios from 'axios';

/**
Global state of the app
* - All quotes
* - Quote filter
**/

const state = {
  quotes: [],
  author: '',
  episode: '',
  season: '',
  filter: '',
  filteredQuotes: []
};

/**
Quotes Controller
**/

const getAllQuotes = async () => {
  try {
    const response = await axios('https://seinfeld-quotes.herokuapp.com/quotes');
    state.quotes = await response.data.quotes;
  } catch (error) {
    console.log(error);
  }
}

const getAllEpisodes = async () => {
  try {
    const response = await axios('https://cors-anywhere.herokuapp.com/http://api.tvmaze.com/shows/530/episodes');
    state.episodes = await response.data;
  } catch (error) {
    console.log(error);
  }
}

// EVENT LISTENERS
// Handle option value change
elements.option.addEventListener("change", e => {
  if (e.target.value === "all") {
    state.filter = '';
  } else {
    state.filter = e.target.value;
  }
});

// Handle quote button click
elements.quoteButton.addEventListener('click', () => {
  // Check whether quotes are to be filtered by character
  if (state.filter === '') {
    // If no filter pull quote from "quotes" array
    state.quote = quotesView.getRandomQuote(state.quotes);

    let currentQuote = new Quote(state.quote, state.quote.author, state.quote.season, state.quote.episode);

    // Update UI with quote details
    quotesView.clearQuote();
    quotesView.renderQuote(currentQuote.quote);
    quotesView.renderQuoteDetails(currentQuote.quote);
    quotesView.updateImage(currentQuote.quote);

    // Update episode and season for use of tvmaze API episode information
    state.episode = currentQuote.episode;
    state.season = currentQuote.season;

    //Render episode synopsis
    synopsisView.clearSynopsis();
    synopsisView.renderEpisodeName(state.season, state.episode, state.episodes);
    synopsisView.renderSynopsis(state.season, state.episode, state.episodes);
  } else {
    // If filter is set, filter quotes by character
    state.filteredQuotes = quotesView.filterQuotes(state.quotes, state.filter);

    // Pull quote from "filteredQuotes" array
    state.quote = quotesView.getRandomQuote(state.filteredQuotes);

    let currentQuote = new Quote(state.quote, state.quote.author, state.quote.season, state.quote.episode);

    // Update UI with quote details
    quotesView.clearQuote();
    quotesView.renderQuote(currentQuote.quote);
    quotesView.renderQuoteDetails(currentQuote.quote);
    quotesView.updateImage(currentQuote.quote);

    // Update episode and season for use of tvmaze API episode information
    state.episode = currentQuote.episode;
    state.season = currentQuote.season;

    //Render episode synopsis
    synopsisView.clearSynopsis();
    synopsisView.renderEpisodeName(state.season, state.episode, state.episodes);
    synopsisView.renderSynopsis(state.season, state.episode, state.episodes);
  }

});

// Perform API calls on page load
window.addEventListener('load', () => {
  getAllQuotes();
  getAllEpisodes();
});
