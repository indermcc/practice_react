import flight from "../apis/flight";
import { SEARCH } from "./types";
import history from "../history";

export const searchFlights = (formValues) => async (dispatch) => {
  const response = await flight.get("/api/flight", { params: formValues });
  dispatch({
    type: SEARCH,
    payload: { response: response.data, search: formValues },
  });
  history.push("/list");
};

export const clearSearch = () => async (dispatch) => {
  dispatch({
    type: SEARCH,
    payload: { response: [], search: {} },
  });
  history.push("/");
};
