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
    departureDate: "",
    returnDate: "",
    departureAirportCode: "",
    arrivalAirportCode: "",
    trip: "oneWay"
  };

  tripHandler = (trip) => {
    this.setState({trip});
  }

  render() {
    return (
      <div className="search-flights container-fluid">
        <h1 className="text-center">Search for a Flight</h1>
        <div className="container">
          <div className="form-class">
            <form className="search-form">
              <div className="form-group form-group-radio">
                <div className="form-check form-check-inline">
                  <label>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="release"
                      defaultChecked
                      onClick={(e) => this.tripHandler("oneWay")}
                    /> One Way
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <label>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="release"
                      onClick={(e) => this.tripHandler("return")}
                    /> Return
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label>
                  Departure airport code
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Departure airport code"
                  value={this.state.departureAirportCode}
                  onChange={(code) => {
                    this.setState({ departureAirportCode: code.target.value });
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
                  value={this.state.arrivalAirportCode}
                  onChange={(code) => {
                    this.setState({ arrivalAirportCode: code.target.value });
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
                  showTimeSelect
                  timeFormat="HH:mm"
                  dateFormat="MMMM d, yyyy HH:mm"
                  selected={this.state.departureDate}
                  onChange={(date) => this.setState({ departureDate: date })}
                />
              </div>
              {this.state.trip === "return" && 
                <div className="form-group">
                  <label>
                    Return Date
                  </label>
                  <br></br>
                  <DatePicker
                    className="form-control"
                    placeholder="Return Date"
                    showTimeSelect
                    timeFormat="HH:mm"
                    dateFormat="MMMM d, yyyy HH:mm"
                    selected={this.state.returnDate}
                    onChange={(date) => this.setState({ returnDate: date })}
                  />
                </div>
              }
              <div className="btn-class">
                <button
                  type="button"
                  className="btn flight-search-btn"
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
