import 'bootstrap/dist/css/bootstrap.min.css'; // import bootstrap style sheet
import "react-datepicker/dist/react-datepicker.css"; // import datepicker style sheet

import SearchFlights from "./components/SearchFlights"; // import search flight component
import { Router, Route, Switch } from "react-router-dom"; // import routes components
import history from "./history"; // import history module
import FlightsList from './components/FlightsList'; // import flight list component

function App() {
  // Defining JSX
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