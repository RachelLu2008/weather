import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {useAutocomplete, usePlaces, useWeatherLoc} from "./Hooks.ts";

function App() {

  const [currStr, setCurrStr] = useState<string>('')
    const [currPlace,setCurrPlace] = useState<string>('')
  const autocomplete = useAutocomplete(currStr);
  const coords = usePlaces(currPlace);
  const  weather = useWeatherLoc(coords? coords.lon : 0 ,coords? coords.lat: 0)



  return (
      <>
          <div>
              <label>
                  <input value={currStr} onChange={e => setCurrStr(e.target.value)}/>
              </label>
              <div>
                  {autocomplete.map((auto, index) =>
                      <div key={index}>
                          <ul>
                              <button onClick={() => {
                                  setCurrPlace(auto.formatted)
                                  setCurrStr(auto.formatted);
                              }}>{auto.formatted}</button>
                          </ul>
                      </div>
                  )}
                  <button onClick={() => {
                      setCurrPlace(currStr)
                  }}>Search
                  </button>
              </div>
          </div>



          <div>
              {weather && <div>
                  <div> {weather.hourly.time.map((_item, index) =>
                      <div key={index}>
                          {weather.hourly.time[index]},
                          {weather.hourly.temperature_2m[index]},
                          {weather.hourly.relative_humidity_2m[index]},
                          {weather.hourly.dew_point_2m[index]},
                          {weather.hourly.apparent_temperature[index]},
                          {weather.hourly.precipitation_probability[index]},
                          {weather.hourly.wind_speed_10m[index]},
                          {weather.hourly.wind_direction_10m[index]},
                          {weather.hourly.wind_gusts_10m[index]},
                          {weather.hourly.precipitation[index]},
                          {weather.hourly.uv_index[index]},
                          {weather.hourly.is_day[index]}
                      </div>



                  )}
                      <div> {weather.hourly.time.map((_item, index) =>
                          <div key={index}>
                              {weather.timezone[index]}
                              {weather.generationtime_ms[index]}
                              {weather.utc_offset_seconds}
                              {weather.timezone}
                              {weather.elevation}
                              {weather.daily.time}
                              {weather.daily.temperature_2m_min}
                              {weather.daily.temperature_2m_max}
                              {weather.daily.sunrise}
                              {weather.daily.uv_index_max}
                              {weather.daily.precipitation_sum}
                              {weather.daily.precipitation_hours}
                              {weather.daily.precipitation_probability_max}
                              {weather.daily.apparent_temperature_max}
                              {weather.daily.apparent_temperature_min}
                              {weather.daily.wind_speed_10m_max}
                          </div>
                      )}

                      </div>

                      <div>{weather.current.time}</div>
                      <div>{weather.current.interval}</div>
                      <div>{weather.current.temperature_2m}</div>
                      <div>{weather.current.relative_humidity_2m}</div>
                      <div>{weather.current.apparent_temperature}</div>
                      <div>{weather.current.is_day}</div>
                      <div>{weather.current.wind_speed_10m}</div>
                      <div>{weather.current.wind_direction_10m}</div>
                      <div>{weather.current.wind_gusts_10m}</div>
                      <div>{weather.current.precipitation}</div>
                      <div>{weather.current.weather_code}</div>
                  </div>
                  }

              </div>
                  </>

                  )
              }

              export default App

