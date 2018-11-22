import React from "react"
import Footer from "../Footer/footer.js"
import "./landingPage.scss"

class LandingPage extends React.Component {

  render() {
    return (
      <div>
      <div className="pageWrapper">
        LANDING PAGE
        INTRO TO OUR PROJECT
        <img src="/globe.svg" alt="globe" />
      </div>
      <Footer />
      </div>
    )
  }

}

export default LandingPage
