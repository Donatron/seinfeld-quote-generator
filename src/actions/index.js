import {
  FETCH_QUOTES,
  SELECT_CHARACTER,
  GET_RANDOM_QUOTE,
  FETCH_EPISODES,
  SELECT_EPISODE
} from "./types";
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

export const fetchEpisodes = () => async dispatch => {
  const response = await axios.get(
    "http://api.tvmaze.com/shows/530/episodes"
  );

  dispatch({
    type: FETCH_EPISODES,
    payload: response.data
  });
};

export const selectCharacter = character => {
  return {
    type: SELECT_CHARACTER,
    payload: character
  };
};

export const getRandomQuote = quote => dispatch => {
  dispatch({
    type: GET_RANDOM_QUOTE,
    payload: quote
  });

  dispatch(selectEpisode(quote));
};

export const selectEpisode = randomQuote => {
  const { season, episode } = randomQuote;

  return {
    type: SELECT_EPISODE,
    payload: {
      season: parseInt(season),
      episode: parseInt(episode),
      types: {
        season: typeof season,
        episode: typeof episode
      }
    }
  };
};
