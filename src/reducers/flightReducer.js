import { SEARCH, CLEAR } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SEARCH:
      return action.payload;
    case CLEAR:
      return { ...state };
    default:
      return state;
  }
};
