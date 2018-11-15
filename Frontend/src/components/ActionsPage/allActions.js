import React from "react"
import SingleAction from "./singleAction.js"


class AllActions extends React.Component {

constructor(props) {
    super(props)
    this.state = {
      actions: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/actions")
      .then(response => response.json())
      .then(data => {
        this.setState({
          actions: data
        })
      })
  }

  render() {
    return (
      <div>
        <h1>Actions</h1>
        <p>
        Number of actions:
        {this.state.actions.length}
        </p>
        <div>
          {this.state.actions.map(action => {
            return <SingleAction
              title={action.title.toUpperCase()}
              description={action.description}
              co2value={action.co2value}
              timePeriod={action.timePeriod} />
          })}
        </div>
      </div>
    )
  }

}

export default AllActions
