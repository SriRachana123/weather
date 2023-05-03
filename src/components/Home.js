import React, { useState } from "react";
import WeatherOutput from "./WeatherOutput";
import "../styles.scss";

export default function Home() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [flag, setFlag] = useState(false)

//   useEffect (()=>{
//    getData();
//   })

  const getData = async (e) => {
    e.preventDefault();
    try {
        let res = await fetch(
           `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=89d43c2f56f56d5556fe9126ebcefe3b&units=imperial`
         );
          let data = await res.json()
          setWeatherData(data);
           setFlag(!flag);
       } catch (error) {
         alert("something went wrong");
       }
  }
  const handleChange = (e) => {
    setLocation(e.target.value);
     };
 
  return (
    <>
    <form onSubmit ={getData}>
      <input
        type="text"
        placeholder="Enter your city"
        onChange={handleChange}
      />
     </form>
     {flag &&<WeatherOutput weatherData={weatherData}location = {location}/>}
    </>
  );
}
