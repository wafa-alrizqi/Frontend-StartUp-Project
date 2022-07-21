import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
export default function About() {
  return (
    <>
    <Nav />
      <div>
        <div style={{ marginLeft: 80, paddingTop: 130, paddingBottom: 50 }}>
          <h1 style={{ textAlign: "left", color: "#2b089f" }}>About Us</h1>
          <hr
            style={{ height: 3, borderTop: "3px solid grey", width: "30%" }}
          />
          <h4 style={{ lineHeight: 2 }}>
            Start Up is The leading job board for{" "}
            <span style={{ color: "#17a2b8", fontSize: "xx-large" }}>
              Designers
            </span>
            ,{" "}
            <span style={{ color: "#17a2b8", fontSize: "xx-large" }}>
              Developers
            </span>
            , and
            <span style={{ color: "#17a2b8", fontSize: "xx-large" }}>
              {" "}
              Creative Pros
            </span>
            <br />
            A platform that brings together all those who interested in
            technical careers.
            <br />
            It offers job opportunities posted by the employers themselves.
            <br /> You can look for a job that matches your qualifications.
            {/* <span style={{color:"rgb(150, 32, 32)"}}>&#x2764;</span> */}
          </h4>
        </div>
      </div>
    </>
  );
}
