import React from "react"
import { Link } from "react-router-dom"
import Geocode from "react-geocode"
import TripComponent from "../tripComponent.js"
import "./flightsPage.scss"
import Header from "../Header/header.js"
// import Footer from "../Footer/footer.js"

Geocode.setApiKey("AIzaSyB4-VrovPd6PrQ_UZP_1V39NuCtUkj9m3U")
Geocode.enableDebug() // Enable or disable logs. Its optional.

class FlightsPage extends React.Component {

state = {
  departure: "",
  arrival: "",
  trips: [],
  totalDistance: 0,
  totalCo2: 0,
  inputError: false
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

clearFields= () => {
  this.setState({
    departure: "",
    arrival: "",
    inputError: false
  })
}

// Get latidude & longitude from address
getLatLng = () => {
  if (this.state.departure.length < 1 || this.state.arrival.length < 1) {
    this.setState({
      inputError: true
    })
  } else {
    const departure = Geocode.fromAddress(this.state.departure)
      .then(response => response.results[0].geometry.location)
    const arrival = Geocode.fromAddress(this.state.arrival)
      .then(response => response.results[0].geometry.location)
    Promise.all([departure, arrival]).then(values => {
      this.getDistance(values[0], values[1])
      this.clearFields()
    })
  }
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
  const co2Value = (distance * 0.000280)
  const trip = { departure: this.state.departure, arrival: this.state.arrival, distance, id: Date.now(), co2Value }
  this.setState({
    trips: [...trips, trip]
  }, () => {
    const tripsData = JSON.stringify(this.state.trips)
    localStorage.setItem("trips", tripsData)
  })
}

getTotalDistance = () => {
  const { trips } = this.state
  let total = 0
  trips.forEach(item => {
    total += Number(item.distance)
  })
  this.setState({
    totalDistance: total
  },
  () => {
    const totalDistanceData = JSON.stringify(this.state.totalDistance)
    localStorage.setItem("distData", totalDistanceData)
  })
}

calcTotalCo2 = () => {
  const { trips } = this.state
  let total = 0
  trips.forEach(item => {
    total += Number(item.co2Value)
  })
  this.setState({
    totalCo2: total
  },
  () => {
    const totalCo2ValueData = JSON.stringify(this.state.totalCo2)
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
  this.setState({
    trips: updatedTrip
  }, () => {
    const tripsData = JSON.stringify(this.state.trips)
    localStorage.setItem("trips", tripsData)
  })
}

componentDidMount() {
  this.getTrips()
  this.getDist()
  this.getTotCo2()
}

componentDidUpdate(prevProps, prevState) {
  if (this.state.trips.length !== prevState.trips.length) {
    this.getTotalDistance()
    this.calcTotalCo2()
  }
}

render() {
  const { arrival, departure, trips } = this.state
  return (
    <div>
      <Header />
      <div className="tripsDataContainer">
        <h4>Total CO2 emissions from your added flights:</h4>
        <p>{this.state.totalCo2} tons</p>
        <Link to="/actions">
          <button type="button" className="goToActionsButton">Let&apos;s compensate this!</button>
        </Link>
      </div>
      <div className="contentWrapper">
        <div className="tripsInputContainer">
          <form className="tripsInputForm">
            <h3>Add return flights to compensate for:</h3>
            <input type="text" id="inputDeparture" placeholder="From" onChange={this.handleDeparture} value={departure} />
            <input type="text" id="inputArrival" placeholder="To" onChange={this.handleArrival} value={arrival} />
            <div className="tripsInputForm-buttonContainer">
              <button type="button" className="inputButton" onClick={this.getLatLng}>Add trip</button>
              {this.state.inputError ? <p>Provided address is invalid!</p> : <p />}
            </div>
          </form>
          <div className="tripsContainer">
            <h3>Added trips:</h3>
            {trips.map(trip => {
              return (
                <TripComponent
                  id={trip.id}
                  departure={trip.departure.toUpperCase()}
                  arrival={trip.arrival.toUpperCase()}
                  distance={trip.distance}
                  removeTrip={this.removeTrip} />
              )
            })}
            <span><h3>Total flight distance: {this.state.totalDistance} km</h3></span>
          </div>
        </div>
      </div>
    </div>

  )
}
}

export default FlightsPage
