import React, { useState } from 'react' // useState is a function

const App = () => {
  const [ counter, setCounter ] = useState(0)

  // Event handler must be a function. If you write
  // <button onClick={setCounter(counter + 1)}>, it's a *function call*
  // and will not work at all.

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
}

export default App
