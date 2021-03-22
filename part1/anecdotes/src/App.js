import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(6).fill(0))
  const [best, setBest] = useState(0)

  const handleVoteClick = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    mostVoted()
  }

  const handleShuffleClick = () => {
    setSelected(Math.floor(Math.random() * 5 - 1) + 1)
  }

  function mostVoted() {
    let mostPopular = 0
    let biggestValue = 0
    for (let i = 0; i < points.length; i++) {
      if (points[i] > biggestValue) {
        mostPopular = i
        biggestValue = points[i]
      }
    }
    setBest(mostPopular)
  }

  return (
    <div>
      <div id='random-anecdotes'>
        <h2>Anecdote of the day</h2>
        <p>{anecdotes[selected]}</p>
        <p>has {points[selected]} points</p>
        <Button handleClick={handleVoteClick} text='vote' />
        <Button handleClick={handleShuffleClick} text='next anecdote' />
      </div>
      <div id='best-anecdote'>
        <h2>Anecdote with most votes</h2>
        <p>{anecdotes[best]}</p>
      </div>
    </div>
  )
}

export default App