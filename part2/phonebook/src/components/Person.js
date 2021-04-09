import React from 'react'
import personsService from '../services/persons'

const Person = ({ person, persons, setPersons }) => {

  const removePerson = () => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService
      .remove(person.id)
      .catch(error => {
        console.log("Error in deleting person")
      })
    }
    setPersons(persons.filter(p => p.id !== person.id))
  }

  return (
    <div>
      {person.name} {person.number}
      <button 
        onClick={removePerson} 
        id={person.id}
      >
        delete
      </button>
    </div>
  )
}

export default Person