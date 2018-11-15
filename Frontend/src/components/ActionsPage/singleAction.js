import React from "react"
import { Link } from "react-router-dom"

class SingleAction extends React.Component {

  render() {
    return (
      <div>
        <div className="singleActionContainer">
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <h3>{this.props.co2value}</h3>
          <p>{this.props.timePeriod}</p>
        </div>
      </div>
    )
  }
}


export default SingleAction
