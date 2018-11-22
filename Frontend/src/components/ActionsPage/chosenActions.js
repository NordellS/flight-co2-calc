import React from "react"
import "./chosenActions.scss"

class ChosenActions extends React.Component {

  handleClickRemove = () => {
    const { id, removeAction } = this.props
    removeAction(id)
  }

  render() {
    const { title, description, co2value, timePeriod, impact } = this.props
    return (
      <div className="chosenActionBox">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Reduction of CO2 emission: <span>{co2value} tCO2e</span> / {timePeriod} year</p>
          <p>{impact} impact</p>
        </div>
        <button type="button" className="removeActionButton" onClick={this.handleClickRemove}>
          Remove this action
        </button>
      </div>
    )
  }
}

export default ChosenActions
