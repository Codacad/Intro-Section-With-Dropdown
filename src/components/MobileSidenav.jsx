import { Link } from "react-router-dom"
import ArrowDown from "../images/icon-arrow-down.svg"
import Close from '../images/icon-close-menu.svg'
// import ArrowUp from "../images/icon-arrow-up.svg"
import Todo from '../images/icon-todo.svg'
import Calender from '../images/icon-calendar.svg'
import Reminders from '../images/icon-reminders.svg'
import Planning from '../images/icon-planning.svg'
const MobileSidenav = ({showSidenav, setShowSidenav}) => {
  window.onclick = (e) => {
    e.target.classList.contains('sidenav-wrapper') ? setShowSidenav(false) : ""
  }
  return (
    <>
      <div className={showSidenav ? "sidenav-wrapper showsidenav-wrapper" : "sidenav-wrapper"}>
          <div className={showSidenav ? "sidenav show-sidenav" : "sidenav"}>
            <nav>
              <header>
                <img src={Close} alt="Close" onClick={() => setShowSidenav(false)}/>
              </header>
              <ul className="nav-list">
                <li className="nav-item" tabIndex="1">
                  <Link to='#'>Features<span className="arrow-down"><img src={ArrowDown} alt="" /></span></Link>
                  <ul className="dropdown">
                    <li className="dropdown-item"><Link to={"#"}><img src={Todo} alt="" /> Todo List</Link></li>
                    <li className="dropdown-item"><Link to={"#"}><img src={Calender} alt="" /> Calender</Link></li>
                    <li className="dropdown-item"><Link to={"#"}><img src={Reminders} alt="" /> Reminders</Link></li>
                    <li className="dropdown-item"><Link to={"#"}><img src={Planning} alt="" /> Planning</Link></li>
                  </ul>
                </li>
                <li className="nav-item" tabIndex="1">
                  <Link to='#'>Company<span className="arrow-down"><img src={ArrowDown} alt="" /></span></Link>
                  <ul className="dropdown">
                    <li className="dropdown-item"><Link to={'#'}>History</Link></li>
                    <li className="dropdown-item"><Link to={'#'}>Our Team</Link></li>
                    <li className="dropdown-item"><Link to={'#'}>Blog</Link></li>
                  </ul>
                </li>
                <li className="nav-item"><Link to={'#'}>Careers</Link></li>
                <li className="nav-item"><Link to={'#'}>About</Link></li>                
              </ul>
              <div className="buttons">
                <Link to={'#'} className="login">Login</Link>
                <Link to={'#'} className="register">Register</Link>
              </div>
            </nav>
          </div>
      </div> 
    </>
  )
}

export default MobileSidenav
