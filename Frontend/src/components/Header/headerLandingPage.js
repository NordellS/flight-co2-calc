import React from "react"
import { Link } from "react-router-dom"
import "./header.scss"

class headerLandingPage extends React.Component {

  render() {
    return (
      <header>
        <div className="logoContainer">
          <Link to="/"><h1>Green Your Conscience</h1></Link>
        </div>
        <div className="navContainer">
          <Link to="/calculate"><p>Calculate CO2</p></Link>
          <Link to="/actions"><p>Compansate</p></Link>
        </div>
      </header>
    )
  }

}

export default headerLandingPage
