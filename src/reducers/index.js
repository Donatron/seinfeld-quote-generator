import { combineReducers } from "redux";
import quoteReducer from "./quoteReducer";
import episodeReducer from "./episodeReducer";

export default combineReducers({
  quotes: quoteReducer,
  episodes: episodeReducer
});
