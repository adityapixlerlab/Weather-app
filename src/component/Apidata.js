import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/style.css";
function Apidata() {
  const [value, setValue] = useState(null);
  const [search, setSearch] = useState("mumbai");

  useEffect(() => {
    handleData();
  }, [search]);

  const handleData = async () => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=effecea7baccf16912338e128c2f0bf8`
      )
      .then((result) => {
        console.log(result);
        setValue(result.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <>
      <div className="card">
        <h1 className="heading">Weather Data</h1>
        <input
          type="search"
          onKeyDown={(e) => {
            if (e.key === "Enter") setSearch(e.target.value);
          }}
        />

        <div className="data">
          <h2>City : {search}</h2>
          <h1>Temp : {value?.main?.temp}</h1>
          <h3>
            min {value?.main?.temp_min} | max {value?.main?.temp_max}
          </h3>
          <h3>wind Speed {value?.wind?.speed}</h3>
        </div>
      </div>
    </>
  );
}

export default Apidata;
