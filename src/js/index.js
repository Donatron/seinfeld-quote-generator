import Quotes from './models/Quote';
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

const controlQuotes = async () => {
  // Generate random quote
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
  // 1. Check whether quotes are to be filtered by character
  if (state.filter === '') {
    // If no filter pull quote from "quotes" array
    state.quote = quotesView.getRandomQuote(state.quotes);
    quotesView.clearQuote();
    quotesView.renderQuote(state.quote);
    quotesView.renderQuoteDetails(state.quote);
  } else {
    // If filter is set, pull quotes from filteredQuotes array
    console.log(`Show my only quotes from ${state.filter}`)
  }

  // 4. Update UI with quote details
});

// Perform API calls on page load
window.addEventListener('load', () => {
  getAllQuotes();
});
