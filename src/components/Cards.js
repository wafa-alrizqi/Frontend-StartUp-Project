import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Cards(props) {
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md- g-4 un-row" style={{}}>
          <div className="col">
            <div className="card h-100 mystyle"
            style={{padding:'10px',transition:'all 0.2s ease-in',marginRight:'150px'}}
            >
              <div
                className="button-box col-lg-12"
                style={{ textAlign: `left`, marginTop: `20px` }}
              >
                <a href=" ">
                  <span
                    className="bi bi-pencil-square"
                    key={props.cards.id}
                    style={{ padding: `10px` }}
                  ></span>
                </a>
                <a href=" ">
                  <span
                    className="bi bi-x-square"
                    key={props.cards.id}
                    style={{ padding: `10px` }}
                  ></span>
                </a>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Title: {props.cards.title}</h5>
                  <p className="card-text">
                    Requirements:
                    <br /> {props.cards.requirements}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
