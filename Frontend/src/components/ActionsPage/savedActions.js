import React from "react"

class SavedAction extends React.Component {

  render() {
    return (
      <div>
        <div className="savedActionsContainer">
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
          <p>Reduction of CO2 emission: <span>{this.props.co2value} tCO2e</span> / {this.props.timePeriod} year</p>
          <p>{this.props.impact} impact</p>
        </div>
      </div>
    )
  }
}

export default SavedAction
