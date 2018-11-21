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
      <div className="tripWrapper">
        <div className="tripInfoContainer">
          <p>
            <span>{departure}</span> to <span>{arrival}</span>
            <br />
            Distance: <span>{distance}</span> km
          </p>
        </div>
        <div className="tripRemoveButton">
          <button type="button" className="removeButton" onClick={this.handleClickRemove}>Remove</button>
        </div>
      </div>
    )
  }

}

export default TripComponent
