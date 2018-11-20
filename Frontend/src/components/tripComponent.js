import React from "react"
import "./tripComponent.scss"

class TripComponent extends React.Component {

  handleClickRemove = () => {
    const { id } = this.props
    this.props.removeTrip(id)
  }

  render() {
    return (
      <div>
        <div className="tripContainer">
          <p>
            <span>{this.props.departure}</span> to <span>{this.props.arrival}</span>: {this.props.distance} km
          </p>
          <button onClick={this.handleClickRemove}>Remove</button>
        </div>
      </div>
    )
  }

}

export default TripComponent
