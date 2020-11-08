import React from "react"; // import react module
import { connect } from "react-redux";  // importing react redux connector
import DatePicker from "react-datepicker"; // import datepicker module
import { searchFlights } from "../actions"; // import actions
import "../scss/SearchFlights.scss" // importing style
/**
 * Defining component class
 */
class SearchFlights extends React.Component {

  state = {
    DepartureDate: "",
    ReturnDate: "",
    DepartureAirportCode: "",
    ArrivalAirportCode: "",
  };

  render() {
    return (
      <div class="container-fluid">
        <div class="container">
          <div class="form-class">
            <h1 class="text-center">Search for a flight</h1>
            <form className="search-form">
              <div className="form-group">
                <label>
                  Departure airport code
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Departure airport code"
                  value={this.state.DepartureAirportCode}
                  onChange={(code) => {
                    this.setState({ DepartureAirportCode: code.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label>
                  Arrival airport code
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Arrival airport code"
                  value={this.state.ArrivalAirportCode}
                  onChange={(code) => {
                    this.setState({ ArrivalAirportCode: code.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label>
                  Departure Date
                </label>
                <br></br>
                <DatePicker
                  className="form-control"
                  placeholder="Departure Date"
                  selected={this.state.DepartureDate}
                  onChange={(date) => this.setState({ DepartureDate: date })}
                />
              </div>
              <div className="form-group">
                <label>
                  Return Date
                </label>
                <br></br>
                <DatePicker
                  className="form-control"
                  placeholder="Return Date"
                  selected={this.state.ReturnDate}
                  onChange={(date) => this.setState({ ReturnDate: date })}
                />
              </div>
              <div class="btn-class">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.props.searchFlights(this.state)}
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { searchFlights })(SearchFlights); // configuring component
