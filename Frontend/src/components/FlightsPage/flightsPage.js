import React from "react"
import { Link } from "react-router-dom"
import Geocode from "react-geocode"
import TripComponent from "../tripComponent.js"
import "./flightsPage.scss"

Geocode.setApiKey("AIzaSyB4-VrovPd6PrQ_UZP_1V39NuCtUkj9m3U")
Geocode.enableDebug() // Enable or disable logs. Its optional.

class FlightsPage extends React.Component {

state = {
  departure: "",
  arrival: "",
  trips: [],
  totalDistance: 0
}

handleDeparture = e => {
  this.setState({
    departure: e.target.value
  })
}

handleArrival = e => {
  this.setState({
    arrival: e.target.value
  })
}

clearFields= () => {
  this.setState({
    departure: "",
    arrival: ""
  })
}

// Get latidude & longitude from address
getLatLng = () => {
  const departure = Geocode.fromAddress(this.state.departure)
    .then(response => response.results[0].geometry.location)
  const arrival = Geocode.fromAddress(this.state.arrival)
    .then(response => response.results[0].geometry.location)
  Promise.all([departure, arrival]).then(values => {
    this.getDistance(values[0], values[1])
    this.getTotalDistance()
    this.clearFields()
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
  const distance = (getDistanceResult * 2).toFixed(0)
  const trip = { departure: this.state.departure, arrival: this.state.arrival, distance }
  this.setState({
    trips: [...this.state.trips, trip]
  }, () => {
    const tripsData = JSON.stringify(this.state.trips)
    localStorage.setItem("trips", tripsData)
  })
}

getTotalDistance = () => {

  let total = 0
  this.state.trips.forEach(item =>{
    total += Number(item.distance)
  })
  this.setState({ totalDistance: total })
//   ,
//   () => {
//     const totalDistanceData = JSON.stringify(this.state.totalDistance)
//     localStorage.setItem("distData", totalDistanceData)
//   })
}


getTrips = () => {
  if (localStorage.getItem("trips")) {
    const tripsData = JSON.parse(localStorage.getItem("trips"))
    this.setState({
      trips: tripsData
    })
  }
}

componentDidMount() {
  this.getTrips()
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
        <h3>Total {this.state.totalDistance}</h3>
        {this.state.trips.map((trip, index) => {
          return (
            <TripComponent
              key={trip.id}
              departure={trip.departure}
              arrival={trip.arrival}
              distance={trip.distance} />
          )
        })
        }
        <Link to="/actionspage">
          <button type="button" className="toActionsPage">Let&apos;s compensate this!</button>
        </Link>
      </div>
    </div>
  )
}
}

export default FlightsPage
