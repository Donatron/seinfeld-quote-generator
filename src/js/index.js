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

const state = {};

/**
Quotes Controller
**/

const controlQuotes = async () => {

}


// Handle option value change
elements.option.addEventListener("change", e => {
  if (e.target.value === "all") {
    console.log('Give me what you will. I can take it');
  } else {
    state.filter = e.target.value;
    console.log(`Show me quotes for ${state.filter}, baby!`);
  }
});
