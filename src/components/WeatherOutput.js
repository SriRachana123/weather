import React from 'react'
import { getWeatherIcon} from '../utils'
export default function WeatherOutput({weatherData,location}) {
  return (
  <section>
    <div className="flex flex-col items-center mt-8 text-sm text-neutral-200">
   <h1>Right now in <strong className="text-neutral-100">{weatherData.name}</strong> it is {weatherData.weather[0].description}</h1>
    </div>
    <div className="flex flex-col items-center gap-8 mt-8 md:items-start md:flex-row md:gap-16">
        <img alt="icon" src={getWeatherIcon(weatherData.weather[0].icon, 'lg')} />

        <div className="flex flex-col items-center">
          <h3 className="text-6xl text-white">{weatherData.main.temp}</h3>
          <span className="mt-2 text-sm text-neutral-200">
         {weatherData.main.temp_min} &#8451; / {weatherData.main.temp_max} &#8451;
          </span>
          </div>
        </div>
  </section>
  )
}
