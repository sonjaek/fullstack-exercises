import React, { useState } from 'react'

// const Person = (person) => {
//   console.log(person.name);
//   return (
//     <div>
//       {person.name}
//     </div>
//   )
// }

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()

    if (persons.map(person => person.name).includes(newName)) {
      window.alert(`${newName} is already added to phonebook`)
      return
    } else {
      const nameObject = {
        name: newName
      }
      setPersons(persons.concat(nameObject))
      setNewName('')
    }
  }

  const handleNameTyping = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameTyping}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => person.name)}
      {/* {persons.map(person =>
        <Person key={person.name} person={person} />
      )} */}
    </div>
  )
}

export default App