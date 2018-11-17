import React from "react"
import SingleAction from "./singleAction.js"


class AllActions extends React.Component {

constructor(props) {
    super(props)
    this.state = {
      actions: [],
      actionsLoad: 0
    }
  }

getActions = () => {
  const dbUrl = "http://localhost:8080/actions"
  fetch(dbUrl)
    .then(response => response.json())
    .then(data => {
      const randomAction = Math.floor(Math.random() * (data.length))
      data = data.slice(randomAction, randomAction + 1)
      this.setState({
        actions: data
      })
    })
}

handleClickShuffle = () => {
  this.getActions()
  this.setState(prevState => ({ actionsLoad: prevState.actionsLoad += 1 }))
}

render() {
  return (
    <div>
      <h1>Actions</h1>
      <div className="actionLoadButton">
        <button type="button" className="loadButton" onClick={this.handleClickShuffle}>Get action</button>
      </div>
      <div>
        {this.state.actions.slice(0, this.state.actionsLoad).map(action => {
          return <SingleAction
            key={action.key}
            title={action.title.toUpperCase()}
            description={action.description}
            co2value={action.co2value}
            timePeriod={action.timePeriod}
            impact={action.impact} />
        })}
      </div>
    </div>
  )
}

}

export default AllActions
