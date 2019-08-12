import { FETCH_EPISODES, SELECT_EPISODE } from "../actions/types";

const initialState = {
  episodes: [],
  selectedEpisode: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_EPISODES:
      return {
        ...state,
        episodes: action.payload
      };
    case SELECT_EPISODE:
      const { season, episode } = action.payload;
      const selectedEpisode = state.episodes.filter(ep => {
        return ep.season === season && ep.number === episode;
      });
      return {
        ...state,
        selectedEpisode: selectedEpisode
      };
    default:
      return state;
  }
}
