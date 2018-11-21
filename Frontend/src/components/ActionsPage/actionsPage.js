import React from "react"
import SingleAction from "./singleAction.js"
import ChosenActions from "./chosenActions.js"

class ActionsPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      randomAction: null,
      actions: [],
      chosenActions: [],
      totalCo2: 0
    }
  }

  getTotCo2 = () => {
    if (JSON.parse(localStorage.getItem("totalCo2"))) {
      this.setState({
        totalCo2: JSON.parse(localStorage.getItem("totalCo2"))
      })
    }
  }

  componentDidMount() {
    this.getTotCo2()
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
    const { chosenActions } = this.state
    this.setState({
      chosenActions: [...chosenActions, actionId]
    })
  }

  handleClickShuffle = () => {
    const { actions } = this.state
    const randomAction = Math.floor(Math.random() * (actions.length))
    this.setState({ randomAction: actions[randomAction] })
  }

  updateUserCo2 = () => {

  }

  calcCo2 = () => {
    let total = 0
    this.state.actions
      .filter(action => this.state.chosenActions.includes(action._id))
      .forEach(action => {
        console.log(action)
        total += Number(action.co2value)
      })
    return total
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.chosenActions.length !== prevState.chosenActions.length) {
      this.updateUserCo2()
    }
  }

  render() {
    const { randomAction, chosenActions, actions } = this.state
    return (
      <div className="pageWrapper">
        <div className="myCo2Container">
          <h3>Current CO2 value: {this.state.totalCo2 - this.calcCo2()}</h3>
        </div>
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
          {chosenActions.map(id => {
            const chosenActionItem = actions.find(item => item._id === id)
            return <ChosenActions
              id={chosenActionItem._id}
              title={chosenActionItem.title}
              description={chosenActionItem.description}
              co2value={chosenActionItem.co2value}
              timePeriod={chosenActionItem.timePeriod}
              impact={chosenActionItem.impact} />
          })}
        </div>
      </div>
    )
  }

}

export default ActionsPage
