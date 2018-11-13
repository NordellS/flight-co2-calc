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

// Get latidude & longitude from address.
Geocode.fromAddress("Arlanda").then(
  response => {
    const { lat, lng } = response.results[0].geometry.location
    console.log(lat, lng)
  },
  error => {
    console.error(error)
  }
)
class FlightsPage extends React.Component {

  // componentDidMount() {
  //   fetch(geocodingUrl)
  //     .then(response => response.json()).then(json => {
  //       this.setState({
  //         geocode: json
  //       })
  //     })
  // }

  render() {
    return (
      <div>
        FLIGHTS PAGE
      </div>
    )
  }

}

export default FlightsPage
