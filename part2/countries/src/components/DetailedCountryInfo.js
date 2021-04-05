import React from 'react'

const Language = ({ language }) => {
  return <li>{language}</li>
}

const DetailedCountryInfo = ({ countryData }) => {  
  return (
    <div>
      <h2>{countryData.name}</h2>
      <p>capital {countryData.capital}</p>
      <p>population {countryData.population}</p>
      <ul>
        {countryData.languages
          .map(language => <Language language={language.name} key={language.name} />
        )}
      </ul>
      <img src={countryData.flag} alt="flag" width="200" />
    </div>
  )
}

export default DetailedCountryInfo