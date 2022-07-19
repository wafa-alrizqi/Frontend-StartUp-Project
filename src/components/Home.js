import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from './Header'

function Home() {
  const [data, setData] = useState([]);


  useEffect(() => {
    axios
      .get(` http://127.0.0.1:8000/posted_jobs_per_employer/${localStorage.getItem('id')}/`)
      .then((res) => {
        setData(res.data.Job);
      })
      .catch((err) => {
        console.log(err);
      });
    },);

  return (
    <div>
      <Header />
      <h3>All Jobs</h3>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;