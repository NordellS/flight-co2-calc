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
  totalDistance: 0,
  totalCo2: 0
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
    this.calcTotalCo2()
    this.clearFields()
  })
}

// calc distances in km from dep to arriv in relation to the radius of the earth
getDistance = (departure, arrival) => {
  const { trips } = this.state
  const R = 6371 // Radius of the earth in km
  const dLat = (arrival.lat - departure.lat) * Math.PI / 180 // deg2rad below
  const dLon = (arrival.lng - departure.lng) * Math.PI / 180
  const a = 0.5 - Math.cos(dLat) / 2
     + Math.cos(departure.lat * Math.PI / 180) * Math.cos(arrival.lat * Math.PI / 180)
     * (1 - Math.cos(dLon)) / 2
  const getDistanceResult = R * 2 * Math.asin(Math.sqrt(a))
  const distance = (getDistanceResult * 2).toFixed(0)
  const trip = { departure: this.state.departure, arrival: this.state.arrival, distance, id: Date.now() }
  this.setState({
    trips: [...trips, trip]
  }, () => {
    const tripsData = JSON.stringify(trips)
    localStorage.setItem("trips", tripsData)
  })
}

getTotalDistance = () => {
  const { trips, totalDistance } = this.state
  let total = 0
  trips.forEach(item => {
    total += Number(item.distance)
  })
  this.setState({
    totalDistance: total
  },
  () => {
    const totalDistanceData = JSON.stringify(totalDistance)
    localStorage.setItem("distData", totalDistanceData)
  })
}

calcTotalCo2 = () => {
  const { totalDistance, totalCo2 } = this.state
  const totalCo2Value = (totalDistance * 0.000280)
  this.setState({
    totalCo2: totalCo2Value
  },
  () => {
    const totalCo2ValueData = JSON.stringify(totalCo2)
    localStorage.setItem("totalCo2", totalCo2ValueData)
  })
}

getTotCo2 = () => {
  if (localStorage.getItem("totalCo2")) {
    const totalCo2ValueData = JSON.parse(localStorage.getItem("totalCo2"))
    this.setState({
      totalCo2: totalCo2ValueData
    })
  }
}

getTrips = () => {
  if (localStorage.getItem("trips")) {
    const tripsData = JSON.parse(localStorage.getItem("trips"))
    this.setState({
      trips: tripsData
    })
  }
}

getDist = () => {
  if (localStorage.getItem("distData")) {
    const totalDistanceData = JSON.parse(localStorage.getItem("distData"))
    this.setState({
      totalDistance: totalDistanceData
    })
  }
}

removeTrip = id => {
  const { trips } = this.state
  const updatedTrip = trips.filter(trip => trip.id !== id)
  this.setState({ trips: updatedTrip })
}

componentDidMount() {
  this.getTrips()
  this.getDist()
  this.getTotCo2()
  this.removeTrip()
}

render() {
  const { arrival, departure, totalDistance, totalCo2, trips } = this.state
  return (
    <div className="pageWrapper">
      <form className="addFlightsForm">
        <label>Add your flight travels: </label>
        <input type="text" id="inputDeparture" placeholder="Departure" onChange={this.handleDeparture} value={departure} />
        <input type="text" id="inputArrival" placeholder="Arrival" onChange={this.handleArrival} value={arrival} />
        <button type="button" className="inputButton" onClick={this.getLatLng}>Submit</button>
      </form>
      <div className="myTravels">
        <h2>My travels</h2>
        <h3>Total distance: {totalDistance} km</h3>
        <h3>Total CO2: {totalCo2} ton</h3>
        {trips.map(trip => {
          return (
            <TripComponent
              id={trip.id}
              departure={trip.departure}
              arrival={trip.arrival}
              distance={trip.distance}
              removeTrip={this.removeTrip} />
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
