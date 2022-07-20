import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import Nav from "./Nav";

function Home() {
  const [data, setData] = useState([]);

  let CardDetails = data.map((cards) => {
    return <Cards cards={cards}></Cards>;
  });
  useEffect(() => {
    axios
      .get(
        ` http://127.0.0.1:8000/posted_jobs_per_employer/${localStorage.getItem(
          "id"
        )}/`
      )
      .then((res) => {
        setData(res.data.Job);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  // Add row on add button click

  return (
    <div>
      <Nav />
      <div className="break"></div>
      <h2 className="d-flex align-items-center justify-content-center"> My Posted Jobs</h2>

      <div className="d-flex gap-1 pb-4" style={{ paddingLeft: `20px` }}>
        <p className="mb-0 me-2 " style={{ color: "black" }}></p>
        <a
          href=" "
          className="d-grid gap-2 d-md-flex justify-content-md-end btn-sm"
          data-toggle="modal"
        >
          <i className="bi bi-plus" style={{ paddingLeft: `5px` }}></i>
          <span>Post New Job</span>
        </a>{" "}
      </div>
      {/* <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul> */}
      <section> {CardDetails} </section>
    </div>
  );
}

export default Home;
