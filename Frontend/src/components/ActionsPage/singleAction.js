import React from "react"
import "./singleAction.scss"

class SingleAction extends React.Component {

state = {
  chosen: false
}

handleClick = () => {
  const { handleActionChoice, id, co2value } = this.props
  const { chosen } = this.state
  this.setState({
    chosen: !chosen
  }, () => {
    handleActionChoice(id, co2value)
  })
}

render() {
  const { title, description, co2value, timePeriod, impact } = this.props
  return (
    <div className="singleActionContainer">
      <button type="button" className="chosenActionButton" onClick={this.handleClick}>
      Select this action
      </button>
      <div className="singleActionText">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Reduction of CO2 emission: <span>{co2value} tCO2e</span> / {timePeriod} year</p>
        <p>{impact} impact</p>
      </div>
    </div>
  )
}
}


export default SingleAction
