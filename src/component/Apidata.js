import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/style.css";
function Apidata() {
  const [value, setValue] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    handleData();
  }, [search]);

  const handleData = async () => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=effecea7baccf16912338e128c2f0bf8`
      )
      .then((result) => {
        // console.log(result.data);
        setValue(result.data);
      })
      .catch((error) => {
        setValue(null);
        console.log("No data found", error);
      });
  };
  console.log(value);
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

        {!value ? (
          <p>No data found</p>
        ) : (
          <div className="data">
            <h2>City : {value?.name}</h2>
            <h1>Temp : {value?.main?.temp + "\u00B0"}</h1>
            <h3>
              min {value?.main?.temp_min + "\u00B0"} | max {value?.main?.temp_max + "\u00B0"}
            </h3>
            <h3>wind Speed {value?.wind?.speed}</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default Apidata;
