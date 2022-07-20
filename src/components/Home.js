import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import EmNav from "./EmNav";



function Home() {
  const [data, setData] = useState([]);

  let CardDetails = data.map((cards) => {
    return <Cards key={cards.id}cards={cards} ></Cards>;
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
  return (
    <div>
      <EmNav />
      <div className="break"></div>

      <div className="d-flex gap-1 pb-4" style={{ paddingLeft: `20px`, backgroundColor:`#eaeaea`,marginLeft:95 ,marginRight:95,paddingTop:20}}>
        <p className="mb-0 me-2 " style={{ color: "black" }}></p>
        <a
          href="/AddJob"
          className="d-grid gap-2 d-md-flex justify-content-md-end btn-sm"
          data-toggle="modal"
        >
          <i className="bi bi-plus" ></i>
          <span>Post New Job</span>
        </a>{" "}
        <h2 className="d-flex align-items-center justify-content-center" style={{color:`darkblue`,fontWeight:800}} > My Posted Jobs</h2>

      </div>
      {/* <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul> */}
      <section className="section-card"> {CardDetails} </section>
    </div>
  );
}

export default Home;
