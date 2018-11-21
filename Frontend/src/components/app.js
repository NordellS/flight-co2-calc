import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import LandingPage from "./LandingPage/landingPage"
import FlightsPage from "./FlightsPage/flightsPage"
import ActionsPage from "./ActionsPage/actionsPage"
import Header from "./Header/header.js"

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
        <Header />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/calculate" exact component={FlightsPage} />
            <Route path="/actions" exact component={ActionsPage} />
          </Switch>
        </div>
      </Router>
    )
  }

}

export default App
