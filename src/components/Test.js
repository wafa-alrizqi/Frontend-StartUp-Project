import React from "react";

export default function Test() {
  // return (
  //   // <!-- Section: Design Block -->
  //   // <section className="background-radial-gradient overflow-hidden">
  //   //   <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
  //   //     <div className="row gx-lg-5 align-items-center mb-5">
  //   //       <div className="col-lg-6 mb-5 mb-lg-0" id='div-z'>
  //   //         <h1 className="my-5 display-5 fw-bold ls-tight" id='h1-style'>
  //   //           The best offer <br />
  //   //           <span className='span-style'>for your business</span>
  //   //         </h1>
  //   //         <p className="mb-4 opacity-70" id='p-style'>
  //   //           Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  //   //           Temporibus, expedita iusto veniam atque, magni tempora mollitia
  //   //           dolorum consequatur nulla, neque debitis eos reprehenderit quasi
  //   //           ab ipsum nisi dolorem modi. Quos?
  //   //         </p>
  //   //       </div>

  //   //       <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
  //   //         <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
  //   //         <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

  //   //         <div className="card bg-glass">
  //   //           <div className="card-body px-4 py-5 px-md-5">
  //   //             <form>
  //   //               {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
  //   //               <div className="row">
  //   //                 <div className="col-md-6 mb-4">
  //   //                   <div className="form-outline">
  //   //                     <input type="text" id="form3Example1" className="form-control" />
  //   //                     <label className="form-label" for="form3Example1">First name</label>
  //   //                   </div>
  //   //                 </div>
  //   //                 <div className="col-md-6 mb-4">
  //   //                   <div className="form-outline">
  //   //                     <input type="text" id="form3Example2" className="form-control" />
  //   //                     <label className="form-label" for="form3Example2">Last name</label>
  //   //                   </div>
  //   //                 </div>
  //   //               </div>

  //   //               {/* <!-- Email input --> */}
  //   //               <div className="form-outline mb-4">
  //   //                 <input type="email" id="form3Example3" className="form-control" />
  //   //                 <label className="form-label" for="form3Example3">Email address</label>
  //   //               </div>

  //   //               {/* <!-- Password input --> */}
  //   //               <div className="form-outline mb-4">
  //   //                 <input type="password" id="form3Example4" className="form-control" />
  //   //                 <label className="form-label" for="form3Example4">Password</label>
  //   //               </div>

  //   //               {/* <!-- Checkbox --> */}
  //   //               <div className="form-check d-flex justify-content-center mb-4">
  //   //                 <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
  //   //                 <label className="form-check-label" for="form2Example33">
  //   //                   Subscribe to our newsletter
  //   //                 </label>
  //   //               </div>

  //   //               {/* <!-- Submit button --> */}
  //   //               <button type="submit" className="btn btn-primary btn-block mb-4">
  //   //                 Sign up
  //   //               </button>

  //   //               {/* <!-- Register buttons --> */}
  //   //               <div className="text-center">
  //   //                 <p>or sign up with:</p>
  //   //                 <button type="button" className="btn btn-link btn-floating mx-1">
  //   //                   <i className="fab fa-facebook-f"></i>
  //   //                 </button>

  //   //                 <button type="button" className="btn btn-link btn-floating mx-1">
  //   //                   <i className="fab fa-google"></i>
  //   //                 </button>

  //   //                 <button type="button" className="btn btn-link btn-floating mx-1">
  //   //                   <i className="fab fa-twitter"></i>
  //   //                 </button>

  //   //                 <button type="button" className="btn btn-link btn-floating mx-1">
  //   //                   <i className="fab fa-github"></i>
  //   //                 </button>
  //   //               </div>
  //   //             </form>
  //   //           </div>
  //   //         </div>
  //   //       </div>
  //   //     </div>
  //   //   </div>
  //   // </section>
  //   // <!-- Section: Design Block -->
  //     )

  return (
    <>
      <section className="h-100 gradient-form">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-6 mx-md-4">
                      <div className="text-center">
                        <img
                          src="https://cdn.dribbble.com/users/11822/screenshots/4868134/startupjobs-logo-v01.png"
                          alt="logo"
                          style={{ width: 185 }}
                        />
                        <h4 className="mt-1 mb-5 pb-1">Start Up</h4>
                      </div>

                      <form>
                        <p>
                          <b>Please login to your account</b>
                        </p>
                        <br />
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Username"
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                            placeholder="Password"
                          />
                        </div>

                        <div className="d-grid gap-2 col-6 mx-auto">
                          <input
                            type="button"
                            id="form2Example22"
                            className="form-control btn btn-outline-primary"
                            value="Log in"
                          />

                          <br></br>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <a href="/EmSignup">Sign up as Employer</a>
                        </div>
                        {/* <a className="text-muted" href="#!">
                          </a> */}
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-1 mx-md-4">
                      <h4 className="mb-4" style={{ color: "rgb(0,0,0)" }}>
                        Are You Looking For A Job?{" "}
                      </h4>{" "}
                      <hr />
                      <h5
                        className="mb-3"
                        style={{ color: "white", fontWeight: "bold" }}
                      >
                        <div className="center">Start Up is Here For You</div>
                        <br /> <br />
                        Finding your next position could be easier if you know
                        where to look !.
                        <br /> <br />
                        <br /> <br />
                        <div className="center">
                          <button
                            type="button"
                            class="center btn btn-outline-light btn-lg"
                          >
                            Find Now
                          </button>
                        </div>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
