import React from "react"
import SingleAction from "./singleAction.js"


class AllActions extends React.Component {

constructor(props) {
    super(props)
    this.state = {
      actions: [],
      chosenActions: []
    }
  }

getActions = () => {
  const dbUrl = process.env.NODE_ENV === "production" ? "https://co2actions.herokuapp.com/actions" : "http://localhost:8080/actions"
  fetch(dbUrl)
    .then(response => response.json())
    .then(data => {
      const randomAction = Math.floor(Math.random() * (data.length))
      data = data.slice(randomAction, randomAction + 1)
      console.log(randomAction)
      this.setState({
        actions: data
      })
    })
}

handleClickShuffle = () => {
  this.getActions()
}

render() {
  return (
    <div>
      <h1>Actions</h1>
      <div className="actionLoadButton">
        <button type="button" className="loadButton" onClick={this.handleClickShuffle}>Get action</button>
      </div>
      <div>
        {this.state.actions.map(action => {
          return <SingleAction
            index={action.index}
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
