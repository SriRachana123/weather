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
           `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`
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
    <div className="flex flex-col items-center min-h-full p-4 rounded-lg weather-container">
    <form onSubmit ={getData}>
      <input className="w-full p-2 text-sm rounded-lg"
        type="text"
        placeholder="Enter your city"
        onChange={handleChange}
      />
     </form>
     {flag &&<WeatherOutput weatherData={weatherData}location = {location}/>}
    </div>
  );
}
