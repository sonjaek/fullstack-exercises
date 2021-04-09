import React, { useState } from 'react'
import personsService from '../services/persons'

const PersonForm = ({ persons, setPersons, setMessage }) => {
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')


  const handleName = (event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.map(person => person.name).includes(newName)) {
      const existingPerson = persons.find(p => p.name === newName)

      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        existingPerson.number = newNumber

        personsService
          .update(existingPerson)
          .then(updated => {
            setPersons(persons.filter(p => p.name !== newName).concat(updated))
          })
          .then(() => {
            setMessage(`Updated the number for ${newName}`)
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
          .catch((error) => {
            console.log("Error in updating the number")
            setMessage(`Could not update the number for ${newName}`)
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }

      personsService
        .create(personObject)
        .then(returnedPersons => {
          setPersons(persons.concat(returnedPersons))
          setNewName('')
          setNewNumber('')
        })
        .then(() => {
          setMessage(`Added ${newName}`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
    }
  }

  return (
      <form onSubmit={addPerson}>
        <div id='nameField'>
          name: <input 
            value={newName}
            onChange={handleName}
          />
        </div>
        <div id='numberField'>
          number: <input
            value={newNumber}
            onChange={handleNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm