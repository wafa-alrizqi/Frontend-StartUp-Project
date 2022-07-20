import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Cards(props) {
  return (
    <>
      <div class="row-cols-md-4">
        <div class="col mb-4">
          <div class="card h-100">
            <div
              class="button-box col-lg-12"
              style={{ textAlign: `left`, marginTop: `20px` }}
            >
              <a href=" ">
                <span
                  className="bi bi-pencil-square"
                  style={{ padding: `10px` }}
                ></span>
              </a>
              <a href=" ">
                <span
                  className="bi bi-x-square"
                  style={{ padding: `10px` }}
                ></span>
              </a>
              <div class="card-body">
                <h5 class="card-title">Title: {props.cards.title}</h5>
                <p class="card-text">
                  Requirements:
                  <br /> {props.cards.requirements}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
