import React from "react"

class SavedAction extends React.Component {

// state = {
//   chosen: false
// }
//
// handleClick = () => {
//   this.setState({
//     chosen: !this.state.chosen
//   }, () => {
//     this.props.handleActionChoice(this.props.title, this.props.description, this.props.co2value, this.props.impact)
//   })
// }

render() {
  return (
    <div>
      <div className="savedActionsContainer">
        <h3>ACTION: {this.props.title}</h3>
        <p>{this.props.description}</p>
        <p>Reduction of CO2 emission: <span>{this.props.co2value} tCO2e</span> / {this.props.timePeriod} year</p>
        <p>{this.props.impact} impact</p>
      </div>
    </div>
  )
}
}


export default SavedAction
