import React from 'react'

const CountryName = ({ name, setFilter }) => {
  const handleClick = () => setFilter(name)

  return (
    <div>
      <p>{name}</p>
      <button onClick={handleClick}>show</button>
    </div>
  )
}

const Countries = ({ countryData, filter, setFilter }) => {

  return (
    <div>
      {countryData.filter(country => country.name
                    .toLowerCase()
                    .includes(filter.toLowerCase()))
            .map(country =>
              <CountryName name={country.name} setFilter={setFilter}
              key={country.name} />
              )
        }
    </div>
  )
}

export default Countries