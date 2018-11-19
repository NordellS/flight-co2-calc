import React from "react"
import "./tripComponent.scss"

class TripComponent extends React.Component {
  
  render() {
    return (
      <div>
        <div className="tripContainer">
          <p>
            <span>{this.props.departure}</span> to <span>{this.props.arrival}</span>: {this.props.distance} km
          </p>
        </div>
      </div>
    )
  }

}

export default TripComponent
