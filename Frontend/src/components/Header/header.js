import React from "react"
import { Link } from "react-router-dom"
import "./header.scss"

class Header extends React.Component {

  render() {
    return (
      <header>
        <div className="text-container">
          <Link to="/"><a className="text">Green Your Consious</a></Link>
          <Link to="/flightspage">FlightsPage</Link>
          <Link to="/actionspage">ActionsPage</Link>
        </div>
      </header>
    )
  }

}

export default Header
