import flight from "../apis/flight"; // import flight api module
import { SEARCH } from "./types"; // import action types
import history from "../history"; // import history module

export const searchFlights = (formValues) => async (dispatch) => {
  const response = await flight.get("/api/flight", { params: formValues }); // requesting flight data
  dispatch({
    type: SEARCH,
    payload: { response: response.data, search: formValues },
  }); // dispatching action with response data
  history.push("/list"); // changing routes path 
};

export const clearSearch = () => async (dispatch) => {
  dispatch({
    type: SEARCH,
    payload: { response: [], search: {} },
  }); // dispatching action after clearing data
  history.push("/");  // changing routes path
};
