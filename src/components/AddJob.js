import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Nav from "./Nav";

export default function AddJob() {
  document.title='Start Up | Post New Job'

  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [requirements, setRrequirements] = useState();
  const [type, setType] = useState();
  const [Start_date, setStart_date] = useState();
  const [city, setCity] = useState();
  const [category, setCategory] = useState();
  const [image, setImage] = useState();
  const [employer_id, setEmployer_id] = useState();

  const postJob = () => {
    setEmployer_id(localStorage.getItem("id"));
    axios
      .post(`http://127.0.0.1:8000/add_job/`, {
        title,
        requirements,
        type,
        Start_date,
        city,
        category,
        image,
        employer_id,
      })
      .then((res) => {
        console.log(res);
        navigate("/Home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <Nav />
    <div className="break"></div>
    <Breadcrumb className="Breadcrumb">
      <Breadcrumb.Item href="/Home">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>New Post</Breadcrumb.Item>
    </Breadcrumb>
      <div>
        <div className="container register-form">
          <div className="form">
            <div className="note">
              <p>Post New Job</p>
            </div>
            <div className="form-content">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title *"
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type={"text"}
                      className="form-control"
                      placeholder="Requirements *"
                      onChange={(e) => {
                        setRrequirements(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type={"date"}
                      className="form-control"
                      placeholder="Start date*"
                      onChange={(e) => {
                        setStart_date(e.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type={"text"}
                      className="form-control"
                      placeholder="image *"
                      onChange={(e) => {
                        setImage(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="col-sm-2">City: </label>

                    <select
                      className="form-control"
                      id="cities"
                      defaultValue="Riyadh"
                      onChange={(e) => setCity(e.target.value)}
                    >
                      <option value="Tabuk">Tabuk</option>
                      <option value="Jeddah">Jeddah</option>
                      <option value="Riyadh">Riyadh</option>
                    </select>
                  </div>

                  <div className="form-group row">
                    <label className="col-sm-2">Type: </label>
                    <div className="col-sm-10">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="on site"
                          onChange={(e) => {
                            setType(e.target.value);
                          }}
                        />
                        <label className="form-check-label">On site</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="remote"
                          onChange={(e) => {
                            setType(e.target.value);
                          }}
                        />
                        <label className="form-check-label">Remote</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2">Category: </label>
                    <select
                      className="form-control"
                      id="categories"
                      defaultValue="Developer"
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="Developer">Developer</option>
                      <option value="Designer">Designer</option>
                    </select>
                  </div>

                  <button type="button" className="btnSubmit" onClick={postJob}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
