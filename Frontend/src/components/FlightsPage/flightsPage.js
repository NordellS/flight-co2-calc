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
  arrival: ""
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
Geocode.fromAddress(this.state.departure)
    .then(
      response => {
        const { lat, lng } = response.results[0].geometry.location
      }
    )
    Geocode.fromAddress(this.state.arrival)
        .then(
          response => {
            const { lat, lng } = response.results[0].geometry.location
          }
        )
}


render() {
  return (
    <div>
    FLIGHTS PAGE
      <form>
        <input type="text" id="inputDeparture" placeholder="city" onChange={this.handleDeparture} value={this.state.departure} />
        <input type="text" id="inputArrival" placeholder="city" onChange={this.handleArrival} value={this.state.arrival} />
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
