import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import "../css/bootstrap.min.css.map";
import "../css/bootstrap.min.css";
import logo from '../images/logo.png';


export default function Nav() {
  return (
    <div>
      <header role="banner">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            <img
              src={logo}
              alt="logo"
              style={{ width: 50 }}
            />
            <a className="navbar-brand" href="/" style={{ color: `#2b089f` }}>
              Start Up
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample05"
              aria-controls="navbarsExample05"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample05">
              <ul className="navbar-nav  pl-lg-5 pl-0">
                {/* <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="/Home"
                    style={{ color: "black" }}
                  >
                    Home
                  </a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="/About" >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Explore">
                    Explore
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item cta-btn">
                  <a className="nav-link" href="/Contact" >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- END header --> */}

      <div
        className="hero"
        style={{ backgroundImage: `url('images/hero_1.jpg')` }}
      ></div>

      <script src="js/jquery-3.3.1.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/jquery.sticky.js"></script>
      <script src="js/main.js"></script>
    </div>
  );
}
