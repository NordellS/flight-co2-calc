import React from "react"
import SingleAction from "./singleAction.js"
import SavedActions from "./savedActions.js"


class AllActions extends React.Component {

constructor(props) {
    super(props)
    this.state = {
      randomAction: null,
      actions: [],
      chosenActions: []
    }
  }

  componentDidMount() {
    this.getActions()
  }

getActions = () => {
  const dbUrl = process.env.NODE_ENV === "production" ? "https://co2actions.herokuapp.com/actions" : "http://localhost:8080/actions"
  fetch(dbUrl)
    .then(response => response.json())
    .then(data => {
      // const randomAction = Math.floor(Math.random() * (data.length))
      // data = data.slice(randomAction, randomAction + 1)
      // console.log(randomAction)
      this.setState({
        actions: data
      })
    })
}

handleActionChoice = actionId => {
  this.setState({
    chosenActions: [...this.state.chosenActions, actionId]
})
}

handleClickShuffle = () => {
  const randomAction = Math.floor(Math.random() * (this.state.actions.length))
  this.setState({ randomAction: this.state.actions[randomAction] })
}

render() {
  const { randomAction } = this.state

  return (
    <div>
      {/* <pre>{JSON.stringify(this.state, 2)}</pre> */}
      <h1>Actions</h1>
      <div className="actionLoadButton">
        <button type="button" className="loadButton" onClick={this.handleClickShuffle}>Get action</button>
      </div>
      <div>
        {randomAction && (<SingleAction
          id={randomAction._id}
          title={randomAction.title.toUpperCase()}
          description={randomAction.description}
          co2value={randomAction.co2value}
          timePeriod={randomAction.timePeriod}
          impact={randomAction.impact}
          handleActionChoice={this.handleActionChoice} />)
        }
      </div>
      <div className="chosenAction">
        <h3>Chosen actions:</h3>
        {this.state.chosenActions.map(id => {
          const chosenAction = this.state.actions.find(item => item._id == id)
          return <SavedActions
            title={chosenAction.title}
            description={chosenAction.description}
            co2value={chosenAction.co2value}
            timePeriod={chosenAction.timePeriod}
            impact={chosenAction.impact} />
        })}
      </div>
    </div>
  )
}

}

export default AllActions
