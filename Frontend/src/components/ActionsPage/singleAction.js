import React from "react"

class SingleAction extends React.Component {

state = {
  chosen: false
}

handleClick = () => {
  const { handleActionChoice, id } = this.props
  const { chosen } = this.state
  this.setState({
    chosen: !chosen
  }, () => {
    handleActionChoice(id)
  })
}

render() {
  const { title, description, co2value, timePeriod, impact } = this.props
  return (
    <div>
      <div className="singleActionContainer">
        <h3>ACTION: {title}</h3>
        <p>{description}</p>
        <p>Reduction of CO2 emission: <span>{co2value} tCO2e</span> / {timePeriod} year</p>
        <p>{impact} impact</p>
      </div>
      <button type="button" className="chosenActionButton" onClick={this.handleClick}>
        Choose this actions
      </button>
    </div>
  )
}
}


export default SingleAction
