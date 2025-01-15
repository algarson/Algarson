import React from 'react'

// Resources
import navbarLogo from '../images/algarson_whitetext_NoBG.png'
import landpageProfile from '../images/algarson_photo-removebg-preview.png'
import jsicon from '../icons/js.png'
import pythonicon from '../icons/python.png'
import htmlicon from '../icons/html-5.png'
import cssicon from '../icons/css-3.png'
import mysqlicon from '../icons/database.png'
import reactjsicon from '../icons/reactjs.png'
import firebaseicon from '../icons/firebase.png'
// Project Images
import kapelogin from '../images/LoginKCProject.png'

// Navigations
import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
        <nav className='navbar'>
            <li className="navbar-tags">
              <span><img src={navbarLogo} alt="Algarson_logo" /></span>
            </li>
            <li className="navbar-tags"><a href='#'>About</a></li>
            <li className="navbar-tags"><a href='#'>Projects</a></li>
            <li className="navbar-tags"><a href='#'>Contact</a></li>
        </nav>
        <section id='section-1'>
            <div className="section-1-content">
              <div className="title-text">
                <p>FRONTEND <span>DEVELOPER</span></p>
              </div>
              <div className="title-desc">
                <div className="left-text">
                  <p>Motivated and technology-driven IT student focused on <span>web design, web development,
                  programming, and understanding technological systems.</span> Seeking opportunity to develop
                    skills and contribute to new information technology projects. </p>
                </div>
                <div className="right-text">
                  <li className='lang-icons'><img src={jsicon} alt="" /></li>
                  <li className='lang-icons'><img src={pythonicon} alt="" /></li>
                  <li className='lang-icons'><img src={reactjsicon} alt="" /></li>
                  <li className='lang-icons'><img src={htmlicon} alt="" /></li>
                  <li className='lang-icons'><img src={cssicon} alt="" /></li>
                  <li className='lang-icons'><img src={mysqlicon} alt="" /></li>
                  <li className='lang-icons'><img src={firebaseicon} alt="" /></li>
                </div>
              </div>
              <div className="shaped-div">
                <div className="landpage-image">
                  <img src={landpageProfile} alt="profile-picture" />
                </div>
              </div>
            </div>
        </section>
        <section id='section-2'>
            <div className="project-container">
                <h2>PROJECTS</h2>
              <div className="project-content">
                <div className="project-card-container">
                  <div className="project-cards">
                    <div className="proj-image item1">
                      <img src={kapelogin} alt="KCloginimage" />
                    </div>
                    <div className="proj-image item2">
                      <img src={kapelogin} alt="KCloginimage" />
                    </div>
                    <div className="proj-image item3">
                      <img src={kapelogin} alt="KCloginimage" />
                    </div>
                    <div className="proj-desc">
                      <p>Development of Point of Sale using QR code with Inventory system for <span>Kape Cinco</span></p>
                    </div>
                    <div className="card-btn">
                      <button>View</button>
                    </div>
                  </div>
                  <div className="project-cards">2</div>
                  <div className="project-cards">3</div>
                  <div className="project-cards">4</div>
                </div>
              </div>
            </div>
        </section>
        <section id='section-3'>

        </section>
    
    </div>
  )
}

export default Home