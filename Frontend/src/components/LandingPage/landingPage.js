import React from "react"
import { Link } from "react-router-dom"
import Footer from "../Footer/footer.js"
import "./landingPage.scss"

class LandingPage extends React.Component {

  render() {
    return (
      <div>
        <div className="pageWrapper">
          <Link to="/"><h1>Green Your Conscience</h1></Link>
          <img src="/globe.svg" alt="globe" />
          <p>
            Are you one of those heroes that care about our planet? Do you avoid flying and if you really don&apos;t have a choice you will make sure you compensate for it.
            We admire you! However, this might be a recent change of your actions due to all the alarms about global warming and climate change these days.
            Maybe you are looking back on all the trips you&apos;ve made in the past and wonder how you could compensate for them? You have come to the right place. We believe
            that donating money to climate projects is good, but starting to make small changes in your everyday life is better. Because if we want a more resilient planet we
            all need to change our behaviour and act greener!
            <br />
            <br />
            Based on your past flight trips we will help you compensate them by giving you suggestions on climate friendly actions to embrace. Are you ready?
          </p>
          <Link to="/calculate">
            <button type="button" className="goToCalculateButton">Let&apos;s start green your conscience!</button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

}

export default LandingPage
