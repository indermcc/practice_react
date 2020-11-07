import React from "react";
import { connect } from "react-redux";
import { clearSearch } from "../actions";
import history from "../history";

class FlightsList extends React.Component {
  row = (index, flight) => {
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>
          <img src={flight.AirlineLogoAddress} />
        </td>
        <td>{flight.AirlineName}</td>
        <td>{flight.InboundFlightsDuration}</td>
        <td>{flight.Stops}</td>
        <td>{flight.TotalAmount}</td>
      </tr>
    );
  };

  render() {
    if (this.props.flights.length === 0) history.push("/");
    return (
      <div class="container-fluid">
        <div class="container">
          <div class="row margin-auto">
            <div class="width-50 padding-class">
              <h1 class="font-size-35">Flight list.</h1>
            </div>
            <div class="width-50 padding-class">
              <button
                type="button"
                onClick={() => this.props.clearSearch()}
                className="btn btn-danger float-right"
              >
                Clear Search
              </button>
            </div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Logo</th>
                <th scope="col">Name</th>
                <th scope="col">Flight Duration</th>
                <th scope="col">Stops</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {this.props.flights.map((flight, index) => {
                return this.row(index, flight);
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let flights =
    state.flights.response === undefined ? [] : state.flights.response;
  return { flights: flights, terms: state.flights.search };
};

export default connect(mapStateToProps, { clearSearch })(FlightsList);