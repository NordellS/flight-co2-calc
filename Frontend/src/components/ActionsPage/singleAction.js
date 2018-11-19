import React from "react"

class SingleAction extends React.Component {

state = {
  saved: false
}
// state = {
//   savedActions: []
// }
//   handleActionClick = () => {
//     const chosenAction = {
//       title: this.props.title,
//       description: this.props.description,
//       co2value: this.props.co2value,
//       timePeriod: this.props.timePeriod
//     }
//     this.setState({
//       savedActions: [chosenAction]
//   })
// }

handleClickSave = () => {
  const index = this.props.index
  const saved = !this.state.saved
  this.props.saveActionsLog(index, saved)

  this.setState({
    saved: !this.state.saved
  })
}

render() {
  return (
    <div>
      <div className="singleActionContainer">
        <h3>ACTION: {this.props.title}</h3>
        <p>{this.props.description}</p>
        <p>Reduction of CO2 emission: <span>{this.props.co2value} tCO2e</span> / {this.props.timePeriod} year</p>
        <p>{this.props.impact} impact</p>
      </div>
    </div>
  )
}
}


export default SingleAction
