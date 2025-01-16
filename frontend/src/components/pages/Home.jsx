import React, { useEffect } from 'react';

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
import figmaicon from '../icons/figmaicon.png'
import formicon from '../images/formicon.png'
import githubicon from '../images/github.png'
import linkedinicon from '../images/linkedin.png'
// Project Images
import kapelogin from '../images/LoginKCProject.png'
import kapeMenu from '../images/MenuKCProject.jpg'
import kapeAdmin from '../images/adminKC.png'
import tmlogin from '../images/tmLogin.png'
import tmhome from '../images/tmHome.png'
import tmdevice from '../images/tmDevice.jpg'
import kibohome from '../images/kiboHome.png'
import kiboservice from '../images/kiboServices.png'
import kibogallery from '../images/kiboGallery.png'


// Navigations
import './Home.css'

const Home = () => {

  useEffect(() => {
    const sliders = document.querySelectorAll('.proj-image-slider');

    sliders.forEach((slider) => {
      let index = 0;
      const images = slider.querySelectorAll('.proj-image');
      const totalImages = images.length;

      setInterval(() => {
        images.forEach((img, i) => {
          img.style.transform = `translateX(-${index * 100}%)`;
        });
        index = (index + 1) % totalImages;
      }, 2000); // Change slide every 3 seconds
    });
  }, []);

  useEffect(() => {
    const sliders1 = document.querySelectorAll('.proj-image-slider1');

    sliders1.forEach((slider1) => {
      let index = 0;
      const images1 = slider1.querySelectorAll('.proj-image1');
      const totalImages1 = images1.length;

      setInterval(() => {
        images1.forEach((img, i) => {
          img.style.transform = `translateX(-${index * 100}%)`;
        });
        index = (index + 1) % totalImages1;
      }, 3000); // Change slide every 3 seconds
    });
  }, []);

  useEffect(() => {
    const sliders2 = document.querySelectorAll('.proj-image-slider2');

    sliders2.forEach((slider2) => {
      let index = 0;
      const images2 = slider2.querySelectorAll('.proj-image2');
      const totalImages2 = images2.length;

      setInterval(() => {
        images2.forEach((img, i) => {
          img.style.transform = `translateX(-${index * 100}%)`;
        });
        index = (index + 1) % totalImages2;
      }, 3800); // Change slide every 3 seconds
    });
  }, []);
  return (
    <div className='home-container'>
        <nav className='navbar'>
            <li className="navbar-tags">
              <span><img src={navbarLogo} alt="Algarson_logo" /></span>
            </li>
            <li className="navbar-tags"><a href='#section-1'>About</a></li>
            <li className="navbar-tags"><a href='#section-2'>Projects</a></li>
            <li className="navbar-tags"><a href='#section-3'>Contact</a></li>
        </nav>
        <section id='section-1'>
            <div className="section-1-content">
              <div className="title-text">
                <p>WEB <span>DEVELOPER</span></p>
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
                  <li className='lang-icons'><img src={figmaicon} alt="" /></li>

                </div>
              </div>
              <div className="shaped-div">
                  <div className="left-container">
                    <div className="left-content">
                        <h1>
                          <span className='d-letter'>D</span>
                          <span className='e-letter'>e</span>
                          <span className='s-letter'>s</span>
                          <span className='i-letter'>i</span>
                          <span className='g-letter'>g</span>
                          <span className='n-letter'>n</span>
                          <span className='e2-letter'>e</span>
                          <span className='r-letter'>r</span>
                        </h1>
                        <div className="left-context">
                          <p>UI/UX Designer with a passion for designing modern and functional user experiences.</p>
                        </div>
                    </div>
                  </div>
                <div className="landpage-image">
                  <img src={landpageProfile} alt="profile-picture" />
                </div>
                  <div className="right-container">
                        <h1>&lt;Coder&gt;</h1>
                        <div className="left-context">
                          <p>Frontend Developer who focuses on writing clean, elegant and efficient code.</p>
                        </div>
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
                    <div className="proj-image-slider">
                      <div className="proj-image" style={{ backgroundImage: `url(${kapelogin})` }}></div>
                      <div className="proj-image" style={{ backgroundImage: `url(${kapeMenu})` }}></div>
                      <div className="proj-image" style={{ backgroundImage: `url(${kapeAdmin})` }}></div>
                    </div>
                    <div className="proj-details">
                      <div className="proj-text">
                        <p>Point of Sale using QR code with Inventory system for <span>Kape Cinco</span>.</p>
                      </div>
                      <div className="proj-lang">
                        <div className="lang">
                          <p>HTML</p>
                        </div>
                        <div className="lang">
                          <p>CSS</p>
                        </div>
                        <div className="lang">
                          <p>PHP</p>
                        </div>
                        <div className="lang">
                          <p>JavaScript</p>
                        </div>
                      </div>
                      <div className="proj-btn">
                        <button className='qr-btn'>
                          <span class="material-symbols-outlined">qr_code</span>
                        </button>
                        <button className='btn'>View</button>
                      </div>
                    </div>
                  </div>
                  <div className="project-cards">
                    <div className="proj-image-slider1">
                      <div className="proj-image1" style={{ backgroundImage: `url(${tmlogin})` }}></div>
                      <div className="proj-image1" style={{ backgroundImage: `url(${tmhome})` }}></div>
                      <div className="proj-image1" style={{ backgroundImage: `url(${tmdevice})` }}></div>
                    </div>
                    <div className="proj-details">
                      <div className="proj-text">
                        <p><span>TrackMoto: </span>Tracking System for Motorcycle with an Integrated GSM-GPS Modules through Web-Based Application.</p>
                      </div>
                      <div className="proj-lang">
                        <div className="lang">
                            <p>HTML</p>
                          </div>
                          <div className="lang">
                            <p>CSS</p>
                          </div>
                          <div className="lang">
                            <p>ReactJS</p>
                          </div>
                          <div className="lang">
                            <p>Node.Js</p>
                          </div>
                      </div>
                      <div className="proj-btn1">
                        <div className="proj-status">
                          <p>In Progress</p>
                        </div>
                        <button className='btn'>View</button>
                      </div>
                    </div>
                  </div>
                  <div className="project-cards">
                    <div className="proj-image-slider2">
                      <div className="proj-image2" style={{ backgroundImage: `url(${kibohome})` }}></div>
                      <div className="proj-image2" style={{ backgroundImage: `url(${kiboservice})` }}></div>
                      <div className="proj-image2" style={{ backgroundImage: `url(${kibogallery})` }}></div>
                    </div>
                    <div className="proj-details">
                      <div className="proj-text">
                        <p><span>Kiboholics: </span>Mechanical Keyboard E-Commerce Website.(Localhost)</p>
                      </div>
                      <div className="proj-lang">
                      <div className="lang">
                          <p>HTML</p>
                        </div>
                        <div className="lang">
                          <p>CSS</p>
                        </div>
                        <div className="lang">
                          <p>JavaScript</p>
                        </div>
                      </div>
                      <div className="proj-btn1">
                        <div className="proj-status">
                          <p>In Progress</p>
                        </div>
                        <button className='btn'>Unavailable</button>
                      </div>
                    </div>
                  </div>
                  <div className='filler-text'>
                    <h1>More Projects to come</h1>
                  </div>
                </div>
              </div>
            </div>
        </section>
        <section id='section-3'>
            <div className="section3-container">
                    <h2>Get in Touch</h2>
                <div className="section3-content">
                  <div className="sec3-form">
                    <div className="left-image">
                      <img src={formicon} alt="form-icon" />
                    </div>
                    <div className="right-form">
                        <div className="form-header">
                          <h3>Got a question, an idea, or just want to say Hi? Let’s connect!</h3>
                        </div>
                        <form className='form'>
                            <div className="form-group">
                              <label htmlFor="user">Full Name</label>
                              <input type="text" id='fname' name='fname' placeholder='Enter your Full Name' required />

                              <label htmlFor="user">Email</label>
                              <input type="email" id='email' name='email' placeholder='Enter your Email' required />

                              <label htmlFor="message">Message</label>
                              <textarea name="message" id="message" className='message-input' placeholder='Enter your Message' required></textarea>
                            </div>
                              <div className="submit-button">
                                <button>Submit</button>
                              </div>
                        </form>
                    </div>
                  </div>
                </div>
                <footer className='paa'>
                    <div className="footer-container">
                      <div className="footer-logo">
                        <img src={navbarLogo} alt="Algarson-logo" />
                      </div>
                      <div className="footer-desc">
                          <div className="footer-desc-content">
                            <p>Designed in <span>Figma</span> and coded in <span>Visual Studio Code</span> by truly yours. Built with <span>ReactJS</span>, Deployed with <span>Vercel</span>.</p>
                          </div>
                      </div>
                      <div className="footer-icons">
                        <div className="footer-icons-container">
                            <img src={githubicon} alt="github-icon" />
                            <img src={linkedinicon} alt="linkedin-icon" />
                        </div>
                      </div>
                    </div>
                </footer>
            </div>
        </section>
    
    </div>
  )
}

export default Home