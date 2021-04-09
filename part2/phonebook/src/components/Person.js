import React from 'react'
import personsService from '../services/persons'

const Person = ({ person, persons, setPersons, setMessage, setMessageType }) => {

  const removePerson = () => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService
      .remove(person.id)
      .then(() => {
        setMessage(`Information of ${person.name} was deleted.`)
        setMessageType('announcement')
        setTimeout(() => {
          setMessage(null)
          setMessageType('')
        }, 5000)
      })
      .catch(error => {
        console.log("Error in deleting person")
        setMessage(`Information of ${person.name} has already been removed from the server`)
        setMessageType('error')
        setTimeout(() => {
          setMessage(null)
          setMessageType('')
        }, 5000)
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