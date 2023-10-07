import HeroImage from '../images/image-hero-desktop.png'
import { Link } from 'react-router-dom'
import AudioPhile from "../images/client-audiophile.svg"
import DataBiz from "../images/client-databiz.svg"
import Maker from "../images/client-maker.svg"
import Meet from "../images/client-meet.svg"
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="text-content">
            <div className="make-remote">
              <h1>Make <br /> Remote Work</h1>
              <p>Get your team in sync. no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
              <Link to={"#"}>Learn More</Link>
            </div>
            <div className="brands">
              <img src={DataBiz} alt="Data Biz" />
              <img src={AudioPhile} alt="AudioPhile" />
              <img src={Maker} alt="Maker" />
              <img src={Meet} alt="Meet" />
            </div>
        </div>
        <div className="image">
          <img src={HeroImage} alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero
