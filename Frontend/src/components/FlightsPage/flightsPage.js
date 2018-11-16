import React from "react"
import Geocode from "react-geocode"
import TripComponent from "../tripComponent.js"
import "./flightsPage.scss"

Geocode.setApiKey("AIzaSyB4-VrovPd6PrQ_UZP_1V39NuCtUkj9m3U")
Geocode.enableDebug() // Enable or disable logs. Its optional.

class FlightsPage extends React.Component {

state = {
  departure: "",
  arrival: "",
  distance: 0,
  trips: [],
  totalDistance: 0,
  userTrips: [],
  trip: []
}

handleDeparture = e => {
  e.preventDefault()
  this.setState({
    departure: e.target.value
  })
}

handleArrival = e => {
  e.preventDefault()
  this.setState({
    arrival: e.target.value
  })
}

// Get latidude & longitude from address (departure address)
getLatLng = () => {
  const departure = Geocode.fromAddress(this.state.departure)
    .then(response => response.results[0].geometry.location)
  const arrival = Geocode.fromAddress(this.state.arrival)
    .then(response => response.results[0].geometry.location)
  Promise.all([departure, arrival]).then(values => {
    this.getDistance(values[0], values[1])
  })
}

// calc distances in km from dep to arriv in relation to the radius of the earth
getDistance = (departure, arrival) => {
  const R = 6371 // Radius of the earth in km
  const dLat = (arrival.lat - departure.lat) * Math.PI / 180 // deg2rad below
  const dLon = (arrival.lng - departure.lng) * Math.PI / 180
  const a = 0.5 - Math.cos(dLat) / 2
     + Math.cos(departure.lat * Math.PI / 180) * Math.cos(arrival.lat * Math.PI / 180)
     * (1 - Math.cos(dLon)) / 2
  const getDistanceResult = R * 2 * Math.asin(Math.sqrt(a))
  const distance = getDistanceResult * 2
  const trip = { departure: this.state.departure, arrival: this.state.arrival, distance }
  localStorage.setItem("userTrips", JSON.stringify(trip))
  this.setState({
    trips: [...this.state.trips, trip]
  })
}

getTrips = () => {
  if (localStorage.getItem("userTrips")) {
    const dataFromStorage = JSON.parse(localStorage.getItem("userTrips"))
    this.setState({
      trips: dataFromStorage
    })
  }
}

render() {
  return (
    <div className="pageWrapper">
      <form className="addFlightsForm">
        <label>Add your flight travels: </label>
        <input type="text" id="inputDeparture" placeholder="Departure" onChange={this.handleDeparture} value={this.state.departure} />
        <input type="text" id="inputArrival" placeholder="Arrival" onChange={this.handleArrival} value={this.state.arrival} />
        <button type="button" className="inputButton" onClick={this.getLatLng}>Submit</button>
      </form>
      <div className="myTravels">
        <h2>My travels</h2>
        {this.state.trips.map((trip, index) => {
          return (
            <TripComponent
              departure={trip.departure}
              arrival={trip.arrival}
              distance={trip.distance} />
          )
        })
        }
      </div>
    </div>
  )
}
}

export default FlightsPage
