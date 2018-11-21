import React from "react"
import { Link } from "react-router-dom"
import "./header.scss"

class Header extends React.Component {

  render() {
    return (
      <header className="headerTextContainer">
        <Link to="/"><h1>Green Your Consious</h1></Link>
        <Link to="/calculate"><p>Calculate CO2</p></Link>
        <Link to="/actions"><p>Compansate</p></Link>
      </header>
    )
  }

}

export default Header
