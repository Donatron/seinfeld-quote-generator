import { FETCH_QUOTES, SELECT_CHARACTER, GET_RANDOM_QUOTE } from "./types";
import axios from "axios";

export const fetchQuotes = () => async dispatch => {
  const response = await axios.get(
    "https://seinfeld-quotes.herokuapp.com/quotes"
  );

  dispatch({
    type: FETCH_QUOTES,
    payload: response.data.quotes
  });
};

export const selectCharacter = character => {
  return {
    type: SELECT_CHARACTER,
    payload: character
  };
};

export const getRandomQuote = quote => {
  return {
    type: GET_RANDOM_QUOTE,
    payload: quote
  };
};
