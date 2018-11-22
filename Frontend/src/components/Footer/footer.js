import React from "react"
import { Link } from "react-router-dom"
import "./footer.scss"

class Footer extends React.Component {

  render() {
    return (
      <footer>
        <div className="footerContainer">
          <a href="mailto:sara@nordell.me">Contact us</a>
        </div>
      </footer>
    )
  }

}

export default Footer
