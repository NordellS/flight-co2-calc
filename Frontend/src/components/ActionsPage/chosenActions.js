import React from "react"

class ChosenActions extends React.Component {

  render() {
    const { title, description, co2value, timePeriod, impact } = this.props
    return (
      <div>
        <div className="chosenActionsContainer">
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Reduction of CO2 emission: <span>{co2value} tCO2e</span> / {timePeriod} year</p>
          <p>{impact} impact</p>
        </div>
        <button type="button" className="removeActionButton">
          Remove this action
        </button>
      </div>
    )
  }
}

export default ChosenActions