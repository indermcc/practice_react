import React from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import { searchFlights } from "../actions";

class SearchFlights extends React.Component {
  onSubmit = (formValues) => {
    this.props.searchFlights(formValues);
  };

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
            <h1 class="text-center">Search for a flight.</h1>
            <form className="search-form">
              <div className="form-group">
                <label>
                  Departure airport code<span class="required-class">*</span>
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
                  Arrival airport code<span class="required-class">*</span>
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
                  Departure Date<span class="required-class">*</span>
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
                  Return Date<span class="required-class">*</span>
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

export default connect(null, { searchFlights })(SearchFlights);
