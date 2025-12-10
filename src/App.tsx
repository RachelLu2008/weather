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
                  }}>Search</button>
              </div>
          </div>
          <div>
              {}
          </div>
      </>

  )
}

export default App

