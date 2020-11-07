import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";

import SearchFlights from "./components/SearchFlights";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import FlightsList from './components/FlightsList';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={SearchFlights} />
          <Route path="/list" exact component={FlightsList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;