import React from "react"

class SavedAction extends React.Component {

  render() {
    const { title, description, co2value, timePeriod, impact } = this.props
    return (
      <div>
        <div className="savedActionsContainer">
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Reduction of CO2 emission: <span>{co2value} tCO2e</span> / {timePeriod} year</p>
          <p>{impact} impact</p>
        </div>
      </div>
    )
  }
}

export default SavedAction
