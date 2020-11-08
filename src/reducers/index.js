import { combineReducers } from "redux"; // import redux module

import flightReducer from "./flightReducer"; // import reducer

export default combineReducers({
    flights: flightReducer,
});  