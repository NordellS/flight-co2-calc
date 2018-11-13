import React from "react"

const key = `AIzaSyB4-VrovPd6PrQ_UZP_1V39NuCtUkj9m3U`
const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${key}`

class FlightsPage extends React.Component {

  componentDidMount() {
    fetch(geocodingUrl).then(response => response.json()).then(json => {
      this.setState({
        geocode: json
      })
    })
  }

  render() {
    return (
      <div />
    )
  }

}

export default FlightsPage
