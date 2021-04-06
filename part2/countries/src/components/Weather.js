import React, { useState, useEffect } from 'react'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY

const WeatherDetail = ({ weather }) => {
  return (
    <div>
      <h3>Weather in {weather.name}</h3>
      <p id="temperature-paragraph">
        <b>temperature:</b> {weather.weather.current.temperature} Celsius
      </p>
      <p id="icon-paragraph">
        {weather.weather.current.weather_icons.map((url, i) => 
            <img key={url} src={url} alt={weather.weather.current.weather_descriptions[i]} />)
        }
      </p>
      <p id="wind-paragraph">
        <b>wind: </b> {weather.weather.current.wind_speed} mph
        direction {weather.weather.current.wind_dir}
      </p>
    </div>
  )
}

const Weather = ({ capital }) => {
  const [ weather, setWeather ] = useState({name : ''})

  const getWeatherHook = () => {
    let unmounted = false

    const params = {
      access_key: api_key,
      query: capital
    }

    axios
      .get('http://api.weatherstack.com/current', {params})
      .then(response => {
        if (!unmounted) {
          if ('current' in response.data) {
            setWeather ( { name : params.query, weather : response.data })
          } else {
            setWeather({name : ''})
            console.log('Cannot retrieve weather', response.data)
          }
        }
      })
      .catch(error => {
        if (!unmounted) {
          setWeather({name : ''})
          console.log(error)
        }
      })
    return () => { unmounted = true }
  }

  useEffect(getWeatherHook, [capital])

  return (
    <div id="weather-display">
      {weather.name !== '' && weather.weather ? 
      <WeatherDetail weather={weather} /> : ''}
    </div>
  )
}

export default Weather