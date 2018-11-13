import React from "react"
import Geocode from "react-geocode"

// const key = "AIzaSyB4-VrovPd6PrQ_UZP_1V39NuCtUkj9m3U"
// const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${key}`

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyB4-VrovPd6PrQ_UZP_1V39NuCtUkj9m3U")

// Enable or disable logs. Its optional.
Geocode.enableDebug()

// Get address from latidude & longitude.
// Geocode.fromLatLng("48.8583701", "2.2922926").then(
//   response => {
//     const address = response.results[0].formatted_address
//     console.log(address)
//   },
//   error => {
//     console.error(error)
//   }
// )

// Get latidude & longitude from address (departure address)
Geocode.fromAddress("Arlanda").then(
  response => {
    const { lat, lng } = response.results[0].geometry.location
    console.log(lat, lng)
  },
  error => {
    console.error(error)
  }
)

// Get latidude & longitude from address (arrival address)
Geocode.fromAddress("London").then(
  response => {
    const { lat, lng } = response.results[0].geometry.location
    console.log(lat, lng)
  },
  error => {
    console.error(error)
  }
)

class FlightsPage extends React.Component {

state = {
  search: ""
}

  handleSearch = event => {
    this.setState({
      search: event.target.value
    }, () => Geocode.fromAddress()
      .then(response => response.json())
      .then(json => {
        this.setState({
          search: json.results
        })
      }))
  }

  render() {
    return (
      <div>
        FLIGHTS PAGE
        <form>
          <input type="search" id="searchDeparture" placeholder="city" onChange={this.handleSearch} value={this.state.search} />
          <input type="search" id="searchArrival" placeholder="city" onChange={this.handleSearch} value={this.state.search} />
        </form>
      </div>
    )
  }

}

export default FlightsPage
