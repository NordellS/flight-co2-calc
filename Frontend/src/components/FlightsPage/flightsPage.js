import React from "react"
import Geocode from "react-geocode"

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyB4-VrovPd6PrQ_UZP_1V39NuCtUkj9m3U")

// // Enable or disable logs. Its optional.
Geocode.enableDebug()

// Get latidude & longitude from address (arrival address)

class FlightsPage extends React.Component {
state = {
  departure: "",
  arrival: "",
  latDep: 0,
  lngDep: 0,
  latArr: 0,
  lngArr: 0
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

// Get latidude & longitude from address (departure address)
handleClick = () => {
  const departure = Geocode.fromAddress(this.state.departure)
    .then(response => response.results[0].geometry.location)
  const arrival = Geocode.fromAddress(this.state.arrival)
    .then(response => response.results[0].geometry.location)
  Promise.all([departure, arrival]).then(values => {
    const distance = this.getDistance(values[0], values[1])
    console.log(distance)
  })
}
//
//

getDistance = (departure, arrival) => {
  const R = 6371 // Radius of the earth in km
  const dLat = (arrival.lat - departure.lat) * Math.PI / 180 // deg2rad below
  const dLon = (arrival.lng - departure.lng) * Math.PI / 180
  const a = 0.5 - Math.cos(dLat) / 2
     + Math.cos(departure.lat * Math.PI / 180) * Math.cos(arrival.lat * Math.PI / 180)
     * (1 - Math.cos(dLon)) / 2

  return R * 2 * Math.asin(Math.sqrt(a))
}

render() {
  return (
    <div>
    FLIGHTS PAGE
      <form>
        <input type="text" id="inputDeparture" placeholder="Departure" onChange={this.handleDeparture} value={this.state.departure} />
        <input type="text" id="inputArrival" placeholder="Arrival" onChange={this.handleArrival} value={this.state.arrival} />
        <button type="button" className="inputButton" onClick={this.handleClick}>Submit</button>
      </form>
      <div>
        <p>hello</p>
      </div>
    </div>
  )
}
}

export default FlightsPage
