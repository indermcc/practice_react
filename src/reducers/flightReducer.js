import { SEARCH, CLEAR } from "../actions/types"; // import action types

const flight =  (state = {}, action) => {
  switch (action.type) {
    case SEARCH:
      return action.payload; // returning payload data
    case CLEAR:
      return {}; // returing empty object
    default:
      return state; // returning default state object
  }
};

export default flight;
