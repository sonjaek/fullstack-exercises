import React from 'react'
import Countries from './Countries'
import DetailedCountryInfo from './DetailedCountryInfo'

const Display = ({ data, filter, setFilter }) => {
  const countries = data.filter(country => country.name
                    .toLowerCase()
                    .includes(filter.toLowerCase()))
                    
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  } else if (countries.length > 1) {
    return <Countries data={data} filter={filter} setFilter={setFilter} />
  } else if (countries.length === 1) {
    return <DetailedCountryInfo countryData={countries[0]} />
  } else {
    console.log('No data available')
    return <p>No data available</p>
  }
}

export default Display