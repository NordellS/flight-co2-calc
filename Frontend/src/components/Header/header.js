import React from "react"
import { Link } from "react-router-dom"

class Header extends React.Component {

  render() {
    return (
      <header className="header">
      <Link to="/">
        <a>LandingPage</a>
      </Link>
        <Link to="/flightspage">
          <a>FlightsPage</a>
        </Link>
        <Link to="/actionspage">
          <a>ActionsPage</a>
        </Link>
      </header>
    )
  }

}

export default Header
