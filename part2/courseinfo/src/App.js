import React from 'react'


const Header = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

const Part = ({ part }) => {
  return (
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  );
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </div>
  );
}

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

// const Total = (props) => {
//   return (
//     <div>
//       <p>Number of exercises {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</p>
//     </div>
//   );
// }

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of component',
        exercises: 14,
        id: 3
      }
    ]
  }
  
  return <Course course={course} />
}

export default App
