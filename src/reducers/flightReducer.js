import { SEARCH, CLEAR } from "../actions/types"; // import action types

export default (state = {}, action) => {
  switch (action.type) {
    case SEARCH:
      return action.payload; // returning payload data
    case CLEAR:
      return {}; // returing empty object
    default:
      return state; // returning default state object
  }
};
