import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import "../css/bootstrap.min.css.map";
import "../css/bootstrap.min.css";
import logo from "../images/logo.png";
import Nav from "./Nav";
import Footer from "./Footer";

function Contact() {
  document.title='Start Up | Contact Us'
  return (
    <div>
      <Nav></Nav>
      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center"></div>
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="wrapper">
                <div class="row mb-5">
                  <div class="col-md-3">
                    <div class="dbox w-100 text-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <i class="bi bi-geo-alt-fill"></i>
                      </div>
                      <div class="text">
                        <p style={{color:'#17a2b8'}}>
                          <span>Address:</span> 198 West 21th Street, Suite 721
                          Riyadh 10016
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="dbox w-100 text-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <i class="bi bi-telephone-fill"></i>
                      </div>
                      <div class="text">
                        <p>
                          <span>Phone:</span>{" "}
                          <a href="tel://1234567920">+ 1235 2355 98</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="dbox w-100 text-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <i class="bi bi-envelope-open-fill"></i>
                      </div>
                      <div class="text">
                        <p>
                          <span>Email:</span>
                          <a href="mailto:info@yoursite.com">
                            contact@startup.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="dbox w-100 text-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <i class="bi bi-globe"></i>
                      </div>
                      <div class="text">
                        <p>
                          <span>Website</span> <a href=" ">startup.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row no-gutters" style={{paddingLeft:'25%'}}>
                  <div class="col-md-7">
                    <div class="contact-wrap w-100 p-md-5 p-4">
                      <h3 class="mb-4">Contact Us</h3>
                      <div id="form-message-warning" class="mb-4"></div>
                      <div id="form-message-success" class="mb-4">
                        Your message was sent, thank you!
                      </div>
                      <form
                        method="POST"
                        id="contactForm"
                        name="contactForm"
                        class="contactForm"
                      >
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label class="label" for="name">
                                Full Name
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                name="name"
                                id="name"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label class="label" for="email">
                                Email Address
                              </label>
                              <input
                                type="email"
                                class="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <label class="label" for="subject">
                                Subject
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <label class="label" for="#">
                                Message
                              </label>
                              <textarea
                                name="message"
                                class="form-control"
                                id="message"
                                cols="30"
                                rows="4"
                                placeholder="Message"
                              ></textarea>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <input
                                type="submit"
                                value="Send Message"
                                class="btn btn-primary"
                              />
                              <div class="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* <div class="col-md-5 d-flex align-items-stretch">
                    <div
                      class="info-wrap w-100 p-5 img"
                      style={{
                        backgroundImage: `url(${logo})`,
                        backgroundSize: "250PX",
                      }}
                    >
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
