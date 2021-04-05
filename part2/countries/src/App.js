import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'

const Countries = ({ data, filter }) => {
  return (
    <div>
      {data.filter(country => country.name
                    .toLowerCase()
                    .includes(filter.toLowerCase()))
            .map(country =>
              <p>{country.name}</p>)
        }
    </div>
  )
}

const App = () => {
  const [ data, setData ] = useState([]) 
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setData(response.data)
      })
  }, [])

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <Countries data={data} filter={filter} />
    </div>
  )
}

export default App