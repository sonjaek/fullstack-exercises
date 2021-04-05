import React from 'react'

const CountryName = ({ name }) => {
  return <p>{name}</p>
}

const Countries = ({ data, filter }) => {
  return (
    <div>
      {data.filter(country => country.name
                    .toLowerCase()
                    .includes(filter.toLowerCase()))
            .map(country =>
              <CountryName name={country.name} key={country.name} />
              )
        }
    </div>
  )
}

export default Countries