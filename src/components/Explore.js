import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import Footer from "./Footer";
import SectionImg from "./SectionImg";
function Explore() {
  document.title='Start Up | Explore'
  return (
    <>
      <Nav />
      <div className="break"></div>
      <SectionImg />

      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="career-search mb-60">
              <form action="#" className="career-form mb-60">
                <div className="row">
                  <div className="col-md-6 col-lg-3 my-3">
                    <div className="input-group position-relative">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Keywords"
                        id="keywords"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 my-3">
                    <div className="select-container">
                      <select className="custom-select">
                        <option selected="">Location</option>
                        <option value="1">Riyadh</option>
                        <option value="2">Jeddah</option>
                        <option value="3">Tabuk</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 my-3">
                    <div className="select-container">
                      <select className="custom-select">
                        <option selected="">Select Job Type</option>
                        <option value="1">Ui designer</option>
                        <option value="2">Backend developer</option>
                        <option value="3">JS developer</option>
                        <option value="4">Web developer</option>
                        <option value="5">Frontend developer</option>
                        <option value="6">React developer</option>
                        <option value="7">Python developer</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 my-3">
                    <button
                      type="button"
                      className="btn btn-lg btn-block btn-light btn-custom"
                      id="contact-submit"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>

              <div className="filter-result">
                <p className="mb-30 ff-montserrat">Total Job Openings : 89</p>

                <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
                  <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
                    <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                      FD
                    </div>
                    <div className="job-content">
                      <h5 className="text-center text-md-left">
                        Front End Developer
                      </h5>
                      <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                        <li className="mr-md-4">
                          <i className="zmdi zmdi-pin mr-2"></i> Riyadh
                        </li>
                        {/* <li className="mr-md-4">
                                                <i className="zmdi zmdi-money mr-2"></i> 2500-3500/pm
                                            </li> */}
                        <li className="mr-md-4">
                          <i className="zmdi zmdi-time mr-2"></i> Full Time
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="job-right my-4 flex-shrink-0">
                    <a
                      href=" "
                      className="btn d-block w-100 d-sm-inline-block btn-light"
                    >
                      Apply now
                    </a>
                  </div>
                </div>

                <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
                  <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
                    <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                      UX
                    </div>
                    <div className="job-content">
                      <h5 className="text-center text-md-left">
                        Ui/Ux Developer
                      </h5>
                      <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                        <li className="mr-md-4">
                          <i className="zmdi zmdi-pin mr-2"></i> Riyadh
                        </li>
                        {/* <li className="mr-md-4">
                                                <i className="zmdi zmdi-money mr-2"></i> 2500-3500/pm
                                            </li> */}
                        <li className="mr-md-4">
                          <i className="zmdi zmdi-time mr-2"></i> Full Time
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="job-right my-4 flex-shrink-0">
                    <a
                      href=" "
                      className="btn d-block w-100 d-sm-inline-block btn-light"
                    >
                      Apply now
                    </a>
                  </div>
                </div>

                <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
                  <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
                    <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                      GD
                    </div>
                    <div className="job-content">
                      <h5 className="text-center text-md-left">
                        Graphic Designer
                      </h5>
                      <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                        <li className="mr-md-4">
                          <i className="zmdi zmdi-pin mr-2"></i> Jeddah
                        </li>
                        {/* <li className="mr-md-4">
                                                <i className="zmdi zmdi-money mr-2"></i> 2500-3500/pm
                                            </li> */}
                        <li className="mr-md-4">
                          <i className="zmdi zmdi-time mr-2"></i> Full Time
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="job-right my-4 flex-shrink-0">
                    <a
                      href=" "
                      className="btn d-block w-100 d-sm-inline-block btn-light"
                    >
                      Apply now
                    </a>
                  </div>
                </div>

                <div className="job-box d-md-flex align-items-center justify-content-between mb-30">
                  <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
                    <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                      JS
                    </div>
                    <div className="job-content">
                      <h5 className="text-center text-md-left">
                        Javascript Developer
                      </h5>
                      <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                        <li className="mr-md-4">
                          <i className="zmdi zmdi-pin mr-2"></i> Jeddah
                        </li>
                        {/* <li className="mr-md-4">
                                                <i className="zmdi zmdi-money mr-2"></i> 2500-3500/pm
                                            </li> */}
                        <li className="mr-md-4">
                          <i className="zmdi zmdi-time mr-2"></i> Full Time
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="job-right my-4 flex-shrink-0">
                    <a
                      href=" "
                      className="btn d-block w-100 d-sm-inline-block btn-light"
                    >
                      Apply now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- START Pagination --> */}
            <nav aria-label="Page navigation">
              <ul className="pagination pagination-reset justify-content-center">
                <li className="page-item disabled">
                  <a
                    className="page-link"
                    href=" "
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    <i className="zmdi zmdi-long-arrow-left"></i>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href=" ">
                    1
                  </a>
                </li>
                <li className="page-item d-none d-md-inline-block">
                  <a className="page-link" href=" ">
                    2
                  </a>
                </li>
                <li className="page-item d-none d-md-inline-block">
                  <a className="page-link" href=" ">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href=" ">
                    ...
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href=" ">
                    8
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href=" ">
                    <i className="zmdi zmdi-long-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
            {/* <!-- END Pagination --> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Explore;
