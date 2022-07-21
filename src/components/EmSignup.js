import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/bootstrap.min.css.map";
import "../css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function EmSignup() {
  document.title = "Start Up | Sign Up";
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

  const signup = () => {
    axios
      .post(`http://127.0.0.1:8000/employer/`, {
        username,
        email,
        password,
        confirm_password,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {/* <Container>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter confirm password"
            onChange={(e) => {
              setConfirm_password(e.target.value);
            }}
          />
        </div>
        <div className="d-grid">
          <button onClick={signup} type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/">sign in?</a>
        </p>
      </Container> */}

      <Nav />

      <section className="h-100 gradient-form">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-l-6">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-1 mx-md-4">
                      <h4 className="mb-4" style={{ color: "rgb(0,0,0)" }}>
                        Are You Looking For Tech Jobs?
                      </h4>{" "}
                      <hr style={{ height: "5px", background: "black" }} />
                      <h5
                        className="mb-3"
                        style={{ color: "white", fontWeight: "bold" }}
                      >
                        <div className="center">Start Up is Here For You</div>
                        <br /> <br />
                        Finding your next position could be easier if you know
                        where to look !
                        <br /> <br />
                        <br /> <br />
                        <div className="center">
                          <a href="/Explore">
                            <button
                              type="button"
                              className="center btn btn-outline-light btn-lg"
                            >
                              Explore Now
                            </button>
                          </a>
                        </div>
                      </h5>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="card-body p-md-6 mx-md-5">
                      <div className="text-center">
                        <div className="card-img-top d-flex align-items-center ">
                          <div className="col-lg-3">
                            <img
                              src="https://cdn.dribbble.com/users/11822/screenshots/4868134/startupjobs-logo-v01.png"
                              alt="logo"
                              style={{ width: 185 }}
                            />
                          </div>
                          <h4
                            className="col p-2 m-6"
                            style={{ fontWeight: "700" }}
                          >
                            Start Up
                          </h4>
                        </div>
                      </div>
                      <form>
                        <p>
                          <br />
                          <b style={{ color: "black", fontWeight: "800" }}>
                            Sign Up
                          </b>
                        </p>
                        <br />
                        <div className="form-outline mb-4">
                          <input
                            type={"text"}
                            id="form2Example11"
                            className="form-control"
                            placeholder="Username"
                            onChange={(e) => {
                              setUsername(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type={"email"}
                            id="form2Example11"
                            className="form-control"
                            placeholder="Email"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type={"password"}
                            id="form2Example22"
                            className="form-control"
                            placeholder="Password"
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type={"password"}
                            id="form2Example22"
                            className="form-control"
                            placeholder="Confirm Password"
                            onChange={(e) => {
                              setConfirm_password(e.target.value);
                            }}
                          />
                        </div>

                        <div className="d-grid gap-2 col-6 mx-auto">
                          <input
                            type="button"
                            id="form2Example23"
                            className="form-control btn btn-outline-primary"
                            value="Sign up"
                            onClick={signup}
                          />

                          <br></br>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2" style={{ color: "black" }}>
                            Already have an account?
                          </p>
                          <a href="/" style={{ transition: "all 0.2s linear" }}>
                            Sign in
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
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
                      className="center btn btn-outline-light btn-lg"
                    >
                      Find Now
                    </button>
                  </div>
                </h5>
              </div>
            </div>
          */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
