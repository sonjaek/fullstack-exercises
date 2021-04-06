import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Display from './components/Display'

const App = () => {
  const [ countryData, setCountryData ] = useState([]) 
  const [ filter, setFilter ] = useState('')

  const getCountriesHook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountryData(response.data)
      })
  }
  useEffect(getCountriesHook, []);

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <Display countryData={countryData} filter={filter} setFilter={setFilter} 
      />
    </div>
  )
}

export default App