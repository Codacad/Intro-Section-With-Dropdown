import { Link } from "react-router-dom"
import ArrowDown from "../images/icon-arrow-down.svg"
import HamburgerIcon from '../images/icon-menu.svg'
// import ArrowUp from "../images/icon-arrow-up.svg"
import Todo from '../images/icon-todo.svg'
import Calender from '../images/icon-calendar.svg'
import Reminders from '../images/icon-reminders.svg'
import Planning from '../images/icon-planning.svg'
const Header = ({showSidenav, setShowSidenav}) => {
  const handleShowSidenav = () => {
    setShowSidenav(true)
  }
  return (
    <>
      <header className="header">
          <nav>
              <div className="nav-leftside">
                <Link to={'/'} className="logo"><h1>snap</h1></Link>
                <ul className="nav-list">
                  <li className="nav-item" tabIndex="1">
                    <Link to='#'>Features<span className="arrow-down"><img src={ArrowDown} alt="" /></span></Link>
                    <div className="dropdown-list">
                      <ul>
                        <li className="dropdown-item"><Link to={"#"}><img src={Todo} alt="" /> Todo List</Link></li>
                        <li className="dropdown-item"><Link to={"#"}><img src={Calender} alt="" /> Calender</Link></li>
                        <li className="dropdown-item"><Link to={"#"}><img src={Reminders} alt="" /> Reminders</Link></li>
                        <li className="dropdown-item"><Link to={"#"}><img src={Planning} alt="" /> Planning</Link></li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item" tabIndex="1">
                    <Link to='#'>Company<span className="arrow-down"><img src={ArrowDown} alt="" /></span></Link>
                    <div className="dropdown-list">
                      <ul>
                        <li className="dropdown-item"><Link to={'#'}>History</Link></li>
                        <li className="dropdown-item"><Link to={'#'}>Our Team</Link></li>
                        <li className="dropdown-item"><Link to={'#'}>Blog</Link></li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item"><Link to={'/careers'}>Careers</Link></li>
                  <li className="nav-item"><Link to={'/about'}>About</Link></li>                
                </ul>
              </div>
              <div className="nav-rightside">
                <div className="buttons">
                  <Link className="login" to='#'>Login</Link>
                  <Link className="register" to='#'>Register</Link>
                </div>
                <div className="hamburger-icon">
                  <img onClick={handleShowSidenav} src={HamburgerIcon} alt="" />
                </div>
              </div>
          </nav>
      </header>
    </>
  )
}
export default Header
