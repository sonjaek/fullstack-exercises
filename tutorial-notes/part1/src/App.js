import React, { useState } from 'react' // useState is a function

const App = () => {
  const [ counter, setCounter ] = useState(0)
  /* "The function call adds state to the component and renders it initialized 
  with the value of zero. The function returns an array that contains two 
  items. We assign the items to the variables counter and setCounter by using 
  the destructuring assignment syntax.

  The counter variable is assigned the initial value of state which is zero.  
  The variable setCounter is assigned to a function that will be used to modify 
  the state.
  */

  setTimeout(
    // The following is invoked one second after calling the setTimeout function
    () => setCounter(counter + 1),
    1000 // one second
  )

  // Now React re-renders the component -> the function body of the component
  // function gets re-executed:
  return (
    <div>{counter}</div>
  )
}

export default App

/*
Every time the setCounter modifies the state it causes the component to 
re-render. The value of the state will be incremented again after one second, 
and this will continue to repeat for as long as the application is running.
*/