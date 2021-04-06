import React from 'react'

const CountryName = ({ name, setFilter }) => {
  console.log(typeof setFilter)
  const handleClick = () => setFilter(name)

  return (
    <div>
      <p>{name}</p>
      <button onClick={handleClick}>show</button>
    </div>
  )
}

const Countries = ({ data, filter, setFilter }) => {

  return (
    <div>
      {data.filter(country => country.name
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