import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {useAutocomplete, usePlaces, useWeatherLoc} from "./Hooks.ts";

function App() {

  const [currStr, setCurrStr] = useState<string>('')
    const [currPlace,setCurrPlace] = useState<string>('')
  const autocomplete = useAutocomplete(currStr);
  const city = usePlaces(currPlace);
  const  coords = useWeatherLoc(city? city.lon : 0 ,city? city.lat: 0)



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
                                  setCurrPlace(auto.city)
                                  setCurrStr(auto.city);
                              }}>{auto.city}</button>
                          </ul>
                      </div>
                  )}
                  <button onClick={() => {

                  }}>Serch</button>
              </div>
          </div>

      </>
  )
}

export default App

