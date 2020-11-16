import React from "react"; // import react module
import { connect } from "react-redux"; // import react reduct connector
import { clearSearch } from "../actions"; // import actions
import history from "../history"; // import history module
import "../scss/FlightsList.scss"; // importing style

/**
 * Defining component class
 */
class FlightsList extends React.Component {
  state = {
    sort: {
      AirlineName: "",
      InboundFlightsDuration: "",
      Stops: "",
      TotalAmount: "",
    },
  };

  /**
   * Rendering single flight
   */
  row = (index, flight) => {
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>
          <img alt={flight.AirlineName} src={flight.AirlineLogoAddress} />
        </td>
        <td>{flight.AirlineName}</td>
        <td>{flight.InboundFlightsDuration}</td>
        <td>{flight.Stops}</td>
        <td>{flight.TotalAmount}</td>
      </tr>
    );
  };

  /**
   * Execute custom sorting
   */
  executeSort = (obj1, obj2) => {
    let comparison = 0;
    if (obj1 > obj2) {
      comparison = 1;
    } else if (obj1 < obj2) {
      comparison = -1;
    }
    return comparison;
  };

  /**
   * Sort according to name
   */
  name = (a, b) => {
    const obj1 = a.AirlineName;
    const obj2 = b.AirlineName;
    return this.executeSort(obj1, obj2);
  };

  /**
   * Sort according to duration
   */
  duration = (a, b) => {
    const obj1 = a.InboundFlightsDuration;
    const obj2 = b.InboundFlightsDuration;
    return this.executeSort(obj1, obj2);
  };

  /**
   * Sort according to stops
   */
  stops = (a, b) => {
    const obj1 = a.Stops;
    const obj2 = b.Stops;
    return this.executeSort(obj1, obj2);
  };

  /**
   * Sort according to amount
   */
  amount = (a, b) => {
    const obj1 = a.TotalAmount;
    const obj2 = b.TotalAmount;
    return this.executeSort(obj1, obj2);
  };

  /**
   * Sorting flight records in descending order
   */
  reverse = (key) => {
    let finalObject = {};
    switch (key) {
      case "AirlineName":
        finalObject = this.props.flights.reverse(this.name);
        break;
      case "InboundFlightsDuration":
        finalObject = this.props.flights.reverse(this.duration);
        break;
      case "Stops":
        finalObject = this.props.flights.reverse(this.stops);
        break;
      case "TotalAmount":
        finalObject = this.props.flights.reverse(this.amount);
        break;
      default:
        break;
    }
    this.setState({
      sort: { [key]: "desc" },
    });
  };

  /**
   * Sorting flight records in ascending order
   */
  sort = (key) => {
    let finalObject = {};
    switch (key) {
      case "AirlineName":
        finalObject = this.props.flights.sort(this.name);
        break;
      case "InboundFlightsDuration":
        finalObject = this.props.flights.sort(this.duration);
        break;
      case "Stops":
        finalObject = this.props.flights.sort(this.stops);
        break;
      case "TotalAmount":
        finalObject = this.props.flights.sort(this.amount);
        break;
      default:
        break;
    }
    this.setState({
      sort: { [key]: "asc" },
    });
  };

  render() {
    if (this.props.flights.length === 0) history.push("/"); // redirecting if data not found
    return (
      <div className="flight-list container-fluid">
        <h1 className="text-center">Flight List</h1>
        <div className="container">
          <div className="width-100 padding-class">
            <button
              type="button"
              onClick={() => this.props.clearSearch()}
              className="btn flight-search-btn"
            >
              Clear Search
            </button>
          </div>
        </div>
        <div className="container table-container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Logo</th>
                <th scope="col">
                  Name
                  <span onClick={() => this.sort("AirlineName")}>▲</span>
                  <span onClick={() => this.reverse("AirlineName")}>▼</span>
                </th>
                <th scope="col">
                  Flight Duration
                  <span onClick={() => this.sort("InboundFlightsDuration")}>
                    ▲
                  </span>
                  <span onClick={() => this.reverse("InboundFlightsDuration")}>
                    ▼
                  </span>
                </th>
                <th scope="col">
                  Stops
                  <span onClick={() => this.sort("Stops")}>▲</span>
                  <span onClick={() => this.reverse("Stops")}>▼</span>
                </th>
                <th scope="col">
                  Amount
                  <span onClick={() => this.sort("TotalAmount")}>▲</span>
                  <span onClick={() => this.reverse("TotalAmount")}>▼</span>
                </th>
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
  return { flights: flights, terms: state.flights.search }; // passing state data to component
};

export default connect(mapStateToProps, { clearSearch })(FlightsList); // configuring component
