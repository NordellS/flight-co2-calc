import React from "react"
import { Link } from "react-router-dom"

class Header extends React.Component {

  render() {
    return (
      <header className="header">
        <Link to="/">
          <li>LandingPage</li>
        </Link>
        <Link to="/flightspage">
          <li>FlightsPage</li>
        </Link>
        <Link to="/actionspage">
          <li>ActionsPage</li>
        </Link>
      </header>
    )
  }

}

export default Header
