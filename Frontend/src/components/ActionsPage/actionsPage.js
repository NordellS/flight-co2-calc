import React from "react"
import SingleAction from "./singleAction.js"
import ChosenActions from "./chosenActions.js"
import Header from "../Header/header.js"
import "./actionsPage.scss"

class ActionsPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      randomAction: null,
      actions: [],
      chosenActions: localStorage.getItem("chosenActionsData") ? JSON.parse(localStorage.getItem("chosenActionsData")) : [],
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
        console.log(data)
        this.setState({
          actions: data
        })
      })
  }

  handleActionChoice = actionId => {
    const { chosenActions } = this.state
    this.setState({
      chosenActions: [...chosenActions, actionId]
    }, () => {
      const actionsData = JSON.stringify(this.state.chosenActions)
      localStorage.setItem("chosenActionsData", actionsData)
    })
  }
  //
  // getActionChoice = () => {
  //   if (localStorage.getItem("chosenActionsData")) {
  //     const actionsData = JSON.parse(localStorage.getItem("chosenActionsData"))
  //     this.setState({
  //       chosenActions: actionsData
  //     })
  //   }
  // }

  handleClickShuffle = () => {
    const { actions } = this.state
    const randomAction = Math.floor(Math.random() * (actions.length))
    this.setState({ randomAction: actions[randomAction] })
  }

  calcCo2 = () => {
    let total = 0
    this.state.actions
      .filter(action => this.state.chosenActions.includes(action._id))
      .forEach(action => {
        total += Number(action.co2value)
      })
    return total
  }

  removeAction = id => {
    const { actions } = this.state
    const updatedAction = actions.filter(action => action._id !== id)
    console.log(updatedAction)
    this.setState({
      actions: updatedAction
    }, () => {
      const actionsData = JSON.stringify(this.state.chosenActions)
      localStorage.setItem("chosenActionsData", actionsData)
    })
  }
  // componentDidUpdate(prevProps, prevState) {
    // if (this.state.chosenActions.length !== prevState.chosenActions.length) {
    // }
  // }

  render() {
    console.log(this.state.actions)
    const { randomAction, chosenActions, actions } = this.state
    console.log(this.state.totalCo2 - this.calcCo2())
    return (
      <div>
        <Header />
        <div className="myCo2Container">
          <h3>Let&apos;s compensate this!</h3>
          <h4>CO2 emissions left to compensate for:</h4>
          <p>{this.state.totalCo2 - this.calcCo2()} tons</p>
        </div>
        <div className="contentWrapper">
          <div className="actionsContainer">
            <div className="randomActionsContainer">
              <button type="button" className="actionLoadButton" onClick={this.handleClickShuffle}>Give me a suggestion!</button>
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
            <h2>Selected actions:</h2>
            <div className="chosenActionsContainer">
              {chosenActions.map(id => {
                const chosenActionItem = actions.find(item => item._id === id)
                if (chosenActionItem) {
                  return <ChosenActions
                    id={chosenActionItem._id}
                    title={chosenActionItem.title}
                    description={chosenActionItem.description}
                    co2value={chosenActionItem.co2value}
                    timePeriod={chosenActionItem.timePeriod}
                    impact={chosenActionItem.impact}
                    removeAction={this.removeAction} />
                }
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default ActionsPage
