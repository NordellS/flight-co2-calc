import React from "react"

class LandingPage extends React.Component {

  render() {
    return (
      <div className="pageWrapper">
        LANDING PAGE
        INTRO TO OUR PROJECT
        <img src="/globe.svg" alt="globe" />
        <footer>
          <a href="mailto:someone@oursite.com?subject=Hi!">Contact us</a>
        </footer>
      </div>
    )
  }

}

export default LandingPage
