import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import LandingPage from "./LandingPage/landingPage"
// import FlightsPage from "./FlightsPage/flightsPage"

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={LandingPage} />
          </Switch>
        </div>
      </Router>
    )
  }

}

export default App
