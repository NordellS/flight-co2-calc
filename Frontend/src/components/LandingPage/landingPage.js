import React from "react"
import { Link } from "react-router-dom"
import Footer from "../Footer/footer.js"
import "./landingPage.scss"

class LandingPage extends React.Component {

  render() {
    return (
      <div>
        <div className="contentWrapper">
          <div className="landingPageContainer">
            <Link to="/"><h1>Green Your Conscience</h1></Link>
            <img src="/globe.svg" alt="globe" />
            <p>
              Are you one of those heroes that care about our planet? Do you
              avoid flying and if you really don&apos;thave a choice you will
              make sure you compensate for it? We admire you! However, this
              might be a recent change of your actions due to all the alarms
              about global warming and climate change these days. Maybe you are
              looking back on all the trips you&apos;ve made in the past and
              wonder how you could compensate for them? You have come to the
              right place. We believe that donating money to climate projects is
              good, but starting to make changes to your everyday life is
              even better. Because, if we want a more resilient planet we all need
              to change our behaviour and act greener!
            </p>
            <h3>How does it work?</h3>
            <p>
              Start by adding trips you want to compensate for. This will give
              you the total value of your CO2 emissions. Once you have accepted
              this fact, move on to the next page and start compensate. You&apos;ll
              get suggestions on climate friendly actions and as you start adding
              them you will see that your emissions decrease. Continue until you
              have reached zero and your conscience will become lighter. Are you
              ready to make up for your past?
            </p>
            <Link to="/calculate">
              <button type="button" className="goToCalculateButton">Start making your conscience greener!</button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

}

export default LandingPage
