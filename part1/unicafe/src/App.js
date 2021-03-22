import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = ({ title, value }) => <div>{title} {value}</div>

const Statistics = ({good, neutral, bad, all, average, positive}) => {
  return (
  <div id='statistics-area'>
    <h2>statistics</h2>
    <Display title='good' value={good} />
    <Display title='neutral' value={neutral} />
    <Display title='bad' value={bad} />
    <Display title='all' value={all} />
    <Display title='average' value={average} />
    <Display title='positive' value={positive} />
  </div>
)}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  // Avoid NaN-values in the beginning (not sure if this is a smart way):
  let average;
  let positive;
  if (all !== 0) {
    average = (good - bad) / all
    positive = 100 * good / all + ' %'
  } else {
    average = 0
    positive = 0 + ' %'
  }  

  const handleGood = () => {
    setAll(all + 1)
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setAll(all + 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <div id='input-area'>
        <h2>give feedback</h2>
        <Button handleClick={handleGood} text='good' />
        <Button handleClick={handleNeutral} text='neutral' />
        <Button handleClick={handleBad} text='bad' />
        <Statistics good={good} neutral={neutral} bad={bad} all={all} 
        average={average} positive={positive} />
      </div>

    </div>
  )
}

export default App