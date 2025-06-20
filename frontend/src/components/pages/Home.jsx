import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import { animate, motion } from "motion/react"

// Resources
import navbarLogo from '../images/algarson_whitetext_NoBG.png'
import landpageProfile from '../images/algarson_photo-removebg-preview.png'
import nodeicon from '../icons/Nodejs.png'
import jsicon from '../icons/js.png'
import pythonicon from '../icons/python.png'
import htmlcssicon from '../icons/HtmlCss.png'
import tailwindicon from '../icons/Tailwind.png'
import mysqlicon from '../icons/database.png'
import reactjsicon from '../icons/reactjs.png'
import firebaseicon from '../icons/firebase.png'
import figmaicon from '../icons/figmaicon.png'
import formicon from '../images/formicon.png'
import githubicon from '../images/github.png'
import linkedinicon from '../images/linkedin.png'
import kcQR from '../images/kcQR.jpg'
import widImage from '../images/widprofile.png'
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
import Devcab1 from '../images/DevcabinHome.png'
import Devcab2 from '../images/DevcabinLanding.png'
import Devcab3 from '../images/DevcabinForm.png'



// Navigations
import './Home.css'

const Home = () => {
  const [isQrModalOepn, setIsQrModalOpen] = useState(false);

  <motion.div layout transition={{ duration: 0.3 }} />

  const openQrModal = () => {
    setIsQrModalOpen(true);
  }

  const closeQrModal = () => {
    setIsQrModalOpen(false);
  }

  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    emailjs
      .send(
        'service_1f84a4f', // Replace with your EmailJS service ID
        'template_db566cg', // Replace with your EmailJS template ID
        formData,           // The form data object
        'Smnr6dIQZtV4EQZkf'      // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          toast.success("Your message has been sent successfully!"); // Toast notification
          setFormData({ fname: '', email: '', message: '' }); // Clear form
        },
        (error) => {
          toast.error('Error sending email:', error);
        }
      );
  };

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
      const images = slider1.querySelectorAll('.proj-image1');
      const totalImages = images.length;

      setInterval(() => {
        images.forEach((img, i) => {
          img.style.transform = `translateX(-${index * 100}%)`;
        });
        index = (index + 1) % totalImages;
      }, 2500); 
    });
  }, []);

  useEffect(() => {
    const sliders2 = document.querySelectorAll('.proj-image-slider2');

    sliders2.forEach((slider2) => {
      let index = 0;
      const images = slider2.querySelectorAll('.proj-image2');
      const totalImages = images.length;

      setInterval(() => {
        images.forEach((img, i) => {
          img.style.transform = `translateX(-${index * 100}%)`;
        });
        index = (index + 1) % totalImages;
      }, 3000); // Change slide every 3 seconds
    });
  }, []);

  useEffect(() => {
    const sliders3 = document.querySelectorAll('.proj-image-slider3');

    sliders3.forEach((slider3) => {
      let index = 0;
      const images = slider3.querySelectorAll('.proj-image3');
      const totalImages = images.length;

      setInterval(() => {
        images.forEach((img, i) => {
          img.style.transform = `translateX(-${index * 100}%)`;
        });
        index = (index + 1) % totalImages;
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
            <motion.div
                  className="title-text"
                  initial={{ x: '-100vw' }} // Start off-screen to the left
                  animate={{ x: 0 }}       // Move to the center
                  transition={{
                    type: 'spring',        // Smooth spring effect
                    stiffness: 120,        // Adjust the bounce
                    damping: 20,           // Reduce overshoot
                    duration: 0.8,         // Optional: control speed
                  }}
                >
                <p>WEB <span>DEVELOPER</span></p>
              </motion.div>
              <div className="title-desc">
                <div className="left-text">
                  <p>Motivated and technology-driven IT student focused on <span>web design, web development,
                  programming, and understanding technological systems.</span> Seeking opportunity to develop
                    skills and contribute to new information technology projects. </p>
                </div>
                <div className="right-text">
                  <li className='lang-icons'><img src={jsicon} alt="" /></li>
                  <li className='lang-icons'><img src={nodeicon} alt="" /></li>
                  <li className='lang-icons'><img src={pythonicon} alt="" /></li>
                  <li className='lang-icons'><img src={reactjsicon} alt="" /></li>
                  <li className='lang-icons'><img src={htmlcssicon} alt="" /></li>
                  <li className='lang-icons'><img src={tailwindicon} alt="" /></li>
                  <li className='lang-icons'><img src={mysqlicon} alt="" /></li>
                  <li className='lang-icons'><img src={firebaseicon} alt="" /></li>
                  <li className='lang-icons'><img src={figmaicon} alt="" /></li>

                </div>
              </div>
              <motion.div 
                  className="shaped-div"
                  initial={{ x: '-100vw' }} // Start off-screen to the left
                  animate={{ x: 0 }}       // Move to the center
                  transition={{
                    type: 'spring',        // Smooth spring effect
                    stiffness: 120,        // Adjust the bounce
                    damping: 20,           // Reduce overshoot
                    duration: 0.8,         // Optional: control speed
                  }}>
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
                          <p>Full Stack Developer who focuses on writing clean, elegant and efficient code.</p>
                        </div>
                  </div>
              </motion.div>
            </div>
        </section>
        <section id='section-2'>
            <motion.div 
                initial={{ y: 100, opacity: 0 }} // Start off-screen below
                whileInView={{ y: 0, opacity: 1 }} // Slide into view
                transition={{
                  type: 'spring',
                  stiffness: 120,
                  damping: 20,
                  duration: 0.8,
                }}
                viewport={{ once: true, amount: 0.2 }} // Animate only once when 20% in view
                className="project-container">
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
                          <p>HTML/CSS</p>
                        </div>
                        <div className="lang">
                          <p>PHP</p>
                        </div>
                        <div className="lang">
                          <p>JavaScript</p>
                        </div>
                        <div className="lang">
                          <p>MySQL</p>
                        </div>
                      </div>
                      <div className="proj-btn">
                        <button className='qr-btn' onClick={openQrModal}>
                          <span class="material-symbols-outlined">qr_code</span>
                        </button>
                        <a className='btn' href='https://kapecinco.horsemendevs.com/' target='_blank' rel='noreferrer'>View</a>
                      </div>
                            {/* Modal */}
                          {isQrModalOepn && (
                            <div className="modal-overlay" onClick={closeQrModal}>
                              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <img
                                  src={kcQR} // Replace with your image URL
                                  alt="QR Code"
                                  className="modal-image"
                                />
                              </div>
                            </div>
                          )}
                    </div>
                  </div>
                <div className="project-cards">
                    <div className="proj-image-slider1">
                      <div className="proj-image1" style={{ backgroundImage: `url(${Devcab1})` }}></div>
                      <div className="proj-image1" style={{ backgroundImage: `url(${Devcab2})` }}></div>
                      <div className="proj-image1" style={{ backgroundImage: `url(${Devcab3})` }}></div>
                    </div>
                    <div className="proj-details">
                      <div className="proj-text">
                        <p><span>Devcabin</span>, a System Application Library for E-Konek Pilipinas Inc. </p>
                      </div>
                      <div className="proj-lang">
                        <div className="lang">
                          <p>ReactJS</p>
                        </div>
                        <div className="lang">
                          <p>NodeJS</p>
                        </div>
                        <div className="lang">
                          <p>Tailwind</p>
                        </div>
                        <div className="lang">
                          <p>MySQL</p>
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
                  <div className="project-cards">
                    <div className="proj-image-slider2">
                      <div className="proj-image2" style={{ backgroundImage: `url(${tmlogin})` }}></div>
                      <div className="proj-image2" style={{ backgroundImage: `url(${tmhome})` }}></div>
                      <div className="proj-image2" style={{ backgroundImage: `url(${tmdevice})` }}></div>
                    </div>
                    <div className="proj-details">
                      <div className="proj-text">
                        <p><span>TrackMoto: </span>Tracking System for Motorcycle with an Integrated GSM-GPS Modules through Web-Based Application.</p>
                      </div>
                      <div className="proj-lang">
                        <div className="lang">
                            <p>HTML/CSS</p>
                          </div>
                          <div className="lang">
                            <p>ReactJS</p>
                          </div>
                          <div className="lang">
                            <p>NodeJS</p>
                          </div>
                          <div className="lang">
                            <p>Firebase</p>
                          </div>
                      </div>
                      <div className="proj-btn1">
                        <div className="proj-status">
                          <p>In Progress</p>
                        </div>
                        <a className='btn' href='https://tm.horsemendevs.com/' target='_blank' rel='noreferrer'>View</a>
                      </div>
                    </div>
                  </div>
                  <div className="project-cards">
                    <div className="proj-image-slider3">
                      <div className="proj-image3" style={{ backgroundImage: `url(${kibohome})` }}></div>
                      <div className="proj-image3" style={{ backgroundImage: `url(${kiboservice})` }}></div>
                      <div className="proj-image3" style={{ backgroundImage: `url(${kibogallery})` }}></div>
                    </div>
                    <div className="proj-details">
                      <div className="proj-text">
                        <p><span>Kiboholics: </span>Mechanical Keyboard E-Commerce Website.(Localhost)</p>
                      </div>
                      <div className="proj-lang">
                      <div className="lang">
                          <p>HTML/CSS</p>
                        </div>
                        <div className="lang">
                          <p>ReactJS</p>
                        </div>
                        <div className="lang">
                          <p>Node</p>
                        </div>
                        <div className="lang">
                          <p>MySQL</p>
                        </div>
                      </div>
                      <div className="proj-btn1">
                        <div className="proj-status">
                          {/* <p>In Progress</p> */}
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
            </motion.div>
        </section>
        {/* <section id='section-wid'>
            <div className="wid-container">
                <div className="wid-content">
                  <div className="wid-profile">
                      <div className="wid-shape">
                        <img src={widImage} alt="WidImage" />
                      </div>
                      <div className="profile-text">
                        <p></p>
                      </div>
                  </div>
                  <div className="wid-cards-container">
                    <div className="wid-cards">1</div>
                    <div className="wid-cards">2</div>
                    <div className="wid-cards">3</div>
                    <div className="wid-cards">4</div>
                  </div>
                </div>
            </div>
        </section> */}
        <section id='section-3'>
            <div className="section3-container">
                    <h2>GET IN TOUCH</h2>
                <motion.div 
                  className="section3-content"
                  initial={{ y: 100, opacity: 0 }} // Start off-screen below
                  whileInView={{ y: 0, opacity: 1 }} // Slide into view
                  transition={{
                  type: 'spring',
                  stiffness: 120,
                  damping: 20,
                  duration: 0.8,
                  }}
                  viewport={{ once: true, amount: 0.2 }}>
                  <div className="sec3-form">
                    <div className="left-image">
                      <img src={formicon} alt="form-icon" />
                    </div>
                    <div className="right-form">
                        <div className="form-header">
                          <h3>Got a question, an idea, or just want to say Hi? Let’s connect!</h3>
                        </div>
                        <form className='form' onSubmit={handleSubmit}>
                            <div className="form-group">
                              <label htmlFor="user">Full Name</label>
                              <input
                                type="text"
                                id='fname'
                                name='fname'
                                placeholder='Enter your Full Name'
                                value={formData.fname}
                                onChange={handleChange}
                                required />

                              <label htmlFor="user">Email</label>
                              <input
                                type="email"
                                id='email'
                                name='email'
                                placeholder='Enter your Email'
                                value={formData.email}
                                onChange={handleChange}
                                required />

                              <label htmlFor="message">Message</label>
                              <textarea
                                name="message"
                                id="message"
                                className='message-input'
                                placeholder='Enter your Message'
                                value={formData.message}
                                onChange={handleChange}
                                required></textarea>
                            </div>
                              <div className="submit-button">
                                <button>Submit</button>
                              </div>
                        </form>
                    </div>
                  </div>
                </motion.div>
                <footer className='paa'>
                    <div className="footer-container">
                      <div className="footer-logo">
                        <img src={navbarLogo} alt="Algarson-logo" />
                      </div>
                      <div className="footer-desc">
                          <div className="footer-desc-content">
                            <p>Designed in <span>Figma</span> and coded in <span>Visual Studio Code</span> by truly yours. Built with <span>ReactJS</span>, Deployed with <span>Vercel</span>.
                            
                            <br></br>
                            <br></br>© 2025 Davizar Perez. All rights reserved.</p>
                          </div>
                      </div>
                      <div className="footer-icons">
                          <div className="contact-footer">
                            <div className="contact-icon">
                              <span class="material-symbols-outlined">mail</span>
                            </div>
                            <div className="email">
                              <p>Daveeperez@gmail.com</p>
                            </div>
                          </div>
                          <div className="footer-icons-container">
                              <a href="https://github.com/algarson" target='_blank' rel="noreferrer"><img src={githubicon} alt="github-icon" /></a>
                              <img src={linkedinicon} alt="linkedin-icon" />
                          </div>
                      </div>
                    </div>
                </footer>
            </div>
        </section>
        <ToastContainer />
    </div>
  )
}

export default Home