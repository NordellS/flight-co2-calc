import React from "react"
import AllActions from "./allActions.js"

class ActionsPage extends React.Component {

  state = {
    totalCo2: 0
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
  }

  render() {
    return (
      <div className="pageWrapper">
        <div className="myCo2Container">
          <h3>Current CO2 value: {this.state.totalCo2}</h3>
        </div>
        <AllActions />
      </div>
    )
  }

}

export default ActionsPage
