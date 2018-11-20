import React from "react"
import "./tripComponent.scss"

class TripComponent extends React.Component {

  handleClickRemove = () => {
    const { id, removeTrip } = this.props
    removeTrip(id)
  }

  render() {
    const { departure, arrival, distance } = this.props
    return (
      <div>
        <div className="tripContainer">
          <p>
            <span>{departure}</span> to <span>{arrival}</span>: {distance} km
          </p>
          <div className="tripRemoveButton">
            <button type="button" className="removeButton" onClick={this.handleClickRemove}>Remove</button>
          </div>
        </div>
      </div>
    )
  }

}

export default TripComponent
