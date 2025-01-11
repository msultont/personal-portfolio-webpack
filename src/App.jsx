import React from "react"

//css styles
import "./styles/animate.css"
import "./styles/icomoon.css"
import "./styles/bootstrap.css"
import "./styles/style.css"

// jQuery Easing
import "jquery.easing/jquery.easing.min.js"
// Waypoints
import "jquery-waypoints/waypoints.min.js"
// Stellar Parallax
import "jquery.stellar/jquery.stellar.js"
// Easy PieChart
import "easy-pie-chart"
// Bootstrap
import "bootstrap/dist/js/bootstrap.min.js"
// Main Script
import "./js/main.js"

//images
import bgImage from "./images/cover_bg_3.jpg"
import sultonImage from "./images/sulton.png"
import portfolio1 from "./images/portfolio-1.jpg"
import portfolio2 from "./images/portfolio-2.jpg"
import portfolio3 from "./images/portfolio-3.jpg"
import portfolio4 from "./images/portfolio-4.jpg"
import portfolio5 from "./images/portfolio-5.jpg"
import portfolio6 from "./images/portfolio-6.jpg"
import portfolio7 from "./images/portfolio-7.jpg"
import portfolio8 from "./images/portfolio-8.jpg"

const App = () => {
  return (
    <>
      {/* <div className="fh5co-loader"></div> */}

      <div id="page">
        <header
          id="fh5co-header"
          className="fh5co-cover js-fullheight"
          role="banner"
          style={{ backgroundImage: `url(${bgImage})` }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                <div className="display-t js-fullheight">
                  <div
                    className="display-tc js-fullheight animate-box"
                    data-animate-effect="fadeIn"
                  >
                    <div
                      className="profile-thumb"
                      style={{ backgroundImage: `url(${sultonImage})` }}
                    ></div>
                    <h1>
                      <span>Sulton Wibawa</span>
                    </h1>
                    <h3>
                      <span>My Life Portfolio</span>
                    </h3>
                    <ul className="fh5co-social-icons">
                      <li>
                        <a
                          target="_blank"
                          href="https://www.github.com/msultont"
                        >
                          <i className="icon-github2" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://www.instagram.com/msultonet"
                        >
                          <i className="icon-instagram2" />
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/msultont/"
                        >
                          <i className="icon-linkedin2"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://www.facebook.com/profile.php?id=100093615963030"
                        >
                          <i className="icon-facebook2"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div id="fh5co-about" className="animate-box">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <ul className="info">
                <li>
                  <span className="first-block">Full Name:</span>
                  <span className="second-block">Muhammad Sulton</span>
                </li>
                <li>
                  <span className="first-block">Phone:</span>
                  <span className="second-block">+6282299024212</span>
                </li>
                <li>
                  <span className="first-block">Email:</span>
                  <span className="second-block">msulton55@gmail.com</span>
                </li>
                <li>
                  <span className="first-block">Website:</span>
                  <span className="second-block">www.msultont.com</span>
                </li>
                <li>
                  <span className="first-block">Address:</span>
                  <span className="second-block">Tangerang, Indonesia</span>
                </li>
              </ul>
            </div>
            <div className="col-md-8">
              <h2>Hello There!</h2>
              <p>
                A dedicated and detail-oriented professional with two years of
                experience in operational management and data entry at PT.
                Bandar Pelumas Sejahtera Abadi. Skilled in warehouse data input,
                sales and balance sheet analysis, and ensuring field operations
                adhere to company SOPs. Experienced in collaborating with
                finance and HR teams to monitor partners and employees, and
                adept at coordinating with senior management to enhance
                after-sales services. Successfully developed new service
                packages for workshop outlets and designed marketing content for
                Instagram, Facebook, and WhatsApp. Committed to continuous
                learning and applying innovative solutions in business
                operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="fh5co-work" className="fh5co-bg-dark">
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>Work</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 text-center col-padding animate-box">
              <a
                href="#"
                className="work"
                style={{ backgroundImage: `url(${portfolio1})` }}
              >
                <div className="desc">
                  <h3>Sea Port Maps</h3>
                  <span>Java Desktop Application</span>
                </div>
              </a>
            </div>
            <div className="col-md-3 text-center col-padding animate-box">
              <a
                href="#"
                className="work"
                style={{ backgroundImage: `url(${portfolio2})` }}
              >
                <div className="desc">
                  <h3>Project Name</h3>
                  <span>Brading</span>
                </div>
              </a>
            </div>
            <div className="col-md-3 text-center col-padding animate-box">
              <a
                href="#"
                className="work"
                style={{ backgroundImage: `url(${portfolio3})` }}
              >
                <div className="desc">
                  <h3>Project Name</h3>
                  <span>Illustration</span>
                </div>
              </a>
            </div>
            <div className="col-md-3 text-center col-padding animate-box">
              <a
                href="#"
                className="work"
                style={{ backgroundImage: `url(${portfolio4})` }}
              >
                <div className="desc">
                  <h3>Project Name</h3>
                  <span>Design</span>
                </div>
              </a>
            </div>
            <div className="col-md-3 text-center col-padding animate-box">
              <a
                href="#"
                className="work"
                style={{ backgroundImage: `url(${portfolio5})` }}
              >
                <div className="desc">
                  <h3>Project Name</h3>
                  <span>Website</span>
                </div>
              </a>
            </div>
            <div className="col-md-3 text-center col-padding animate-box">
              <a
                href="#"
                className="work"
                style={{ backgroundImage: `url(${portfolio6})` }}
              >
                <div className="desc">
                  <h3>Project Name</h3>
                  <span>Illustration</span>
                </div>
              </a>
            </div>
            <div className="col-md-3 text-center col-padding animate-box">
              <a
                href="#"
                className="work"
                style={{ backgroundImage: `url(${portfolio7})` }}
              >
                <div className="desc">
                  <h3>Project Name</h3>
                  <span>Brading</span>
                </div>
              </a>
            </div>
            <div className="col-md-3 text-center col-padding animate-box">
              <a
                href="#"
                className="work"
                style={{ backgroundImage: `url(${portfolio8})` }}
              >
                <div className="desc">
                  <h3>Project Name</h3>
                  <span>Illustration</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="gototop js-top">
        <a href="#" className="js-gotop">
          <i className="icon-arrow-up22"></i>
        </a>
      </div>
    </>
  )
}

export default App
