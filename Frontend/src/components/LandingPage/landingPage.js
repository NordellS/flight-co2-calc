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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis luctus nisi. Duis id ipsum ut nunc consequat faucibus in ut neque. Praesent eu consectetur tellus. Fusce et nibh volutpat, porttitor ex sed, lobortis dui. Aliquam sodales est quis dolor dignissim volutpat. Ut lacus risus, sodales sed est id, feugiat pretium velit. Vivamus sollicitudin nunc id magna viverra finibus. Pellentesque a molestie quam. Morbi ornare interdum urna. Vivamus tortor tellus, posuere eget facilisis quis, tristique vitae metus. Mauris quis ullamcorper velit.
          Maecenas rutrum purus a erat porta tempus. Ut ac lectus velit. Maecenas condimentum sapien at quam pretium tempus. Aenean et aliquet lectus. Aliquam sit amet augue non odio venenatis aliquet. Nullam efficitur consectetur lorem feugiat ullamcorper. Ut auctor nunc quis suscipit eleifend. Vivamus id posuere massa.
          In sollicitudin, nunc a lacinia bibendum, ante dolor auctor augue, ut volutpat nisl diam et massa. Morbi ut tellus erat. Mauris magna neque, lacinia a magna et, maximus vehicula turpis. Donec maximus velit nibh, in condimentum nunc condimentum at. Pellentesque velit tortor, pharetra quis commodo et, condimentum nec dui. Donec ac laoreet tellus, pharetra consequat nisl. Morbi tempor aliquam lobortis. Cras congue, nibh convallis pellentesque venenatis, massa magna luctus ipsum, dictum suscipit magna turpis et lorem. Nulla et velit odio. Aenean gravida efficitur ultricies.
          </p>
        </div>
        <Footer />
      </div>
    )
  }

}

export default LandingPage
