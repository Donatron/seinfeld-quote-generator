import {
  FETCH_QUOTES,
  SELECT_CHARACTER,
  GET_RANDOM_QUOTE
} from "../actions/types";

const initialState = {
  quotes: [],
  character: "",
  randomQuote: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUOTES:
      return {
        ...state,
        quotes: action.payload
      };
    case SELECT_CHARACTER:
      return {
        ...state,
        character: action.payload
      };
    case GET_RANDOM_QUOTE:
      return {
        ...state,
        randomQuote: action.payload
      };
    default:
      return state;
  }
}
