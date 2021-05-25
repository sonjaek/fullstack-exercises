import React, { useState, useEffect } from 'react'
import PersonsList from './components/PersonsList'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personsService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ filter, setFilter ] = useState('')
  const [ message, setMessage ] = useState('')
  const [messageType, setMessageType ] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })  
      .catch(error => {
        console.log('fetching /persons failed')
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} type={messageType} />
      <Filter filter={filter} setFilter={setFilter} />
      <h3>Add new contact</h3>
      <PersonForm persons={persons} setPersons={setPersons} setMessage={setMessage} setMessageType={setMessageType} />
      <h3>Numbers</h3>
      <PersonsList persons={persons} setPersons={setPersons} filter={filter} setMessage={setMessage} setMessageType={setMessageType} />
    </div>
  )
}

export default App
