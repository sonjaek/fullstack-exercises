import React from 'react'
import Countries from './Countries'
import DetailedCountryInfo from './DetailedCountryInfo'
import Weather from './Weather'

const Display = ({ countryData, filter, setFilter }) => {
  const countries = countryData.filter(country => country.name
                    .toLowerCase()
                    .includes(filter.toLowerCase()))
                    
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (countries.length > 1) {
    return <Countries countryData={countryData} filter={filter} setFilter={setFilter} />
  } else if (countries.length === 1) {
    return (
    <div>
      <DetailedCountryInfo countryData={countries[0]} />
      <Weather capital={countries[0].capital} />
    </div>
    )
  } else {
    return <p>No data available</p>
  }
}

export default Display