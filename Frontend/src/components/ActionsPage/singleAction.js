import React from "react"

class SingleAction extends React.Component {

  render() {
    return (
      <div>
        <div className="singleActionContainer">
          <h3>ACTION: {this.props.title}</h3>
          <p>{this.props.description}</p>
          <p><span>CO2 emission:</span> {this.props.co2value} tCO2e / {this.props.timePeriod} year</p>
        </div>
      </div>
    )
  }
}


export default SingleAction
