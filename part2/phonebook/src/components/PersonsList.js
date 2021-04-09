import React from 'react'
import Person from './Person'

const PersonsList = ({ persons, setPersons, filter, setMessage, setMessageType }) => {

  return (
    <div>
      {persons.filter(person => person.name
                                  .toLowerCase()
                                  .includes(filter.toLowerCase()))
              .map(person =>
                <Person 
                  key={person.id} 
                  person={person}
                  persons={persons}
                  setPersons={setPersons}
                  setMessage={setMessage}
                  setMessageType={setMessageType}
                />
      )}
    </div>
  )
}

export default PersonsList