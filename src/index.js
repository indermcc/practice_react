import React from "react"; // import react module
import ReactDOM from "react-dom"; // import react dom module
import { createStore, applyMiddleware, compose } from "redux"; // importing redux components
import { Provider } from "react-redux"; // importing react redux connector
import "./index.css"; // import default style sheet
import App from "./App"; // import app component
import reduxThunk from "redux-thunk"; // enable Actions to handle asyncronous requests

import Reducers from "./reducers"; // including reducers

/* Configuration store starts */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  Reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);
/* Configuration store ends */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
