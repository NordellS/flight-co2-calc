import React from "react"

class TripComponent extends React.Component {

  render() {
    return (
      <div>
        <div className="tripsContainer">
          <h2>My trips</h2>
          <p>{this.props.departure}</p>
          <p>{this.props.arrival}</p>
          <p>{this.props.distance}</p>
        </div>
      </div>
    )
  }

}

export default TripComponent
