import React from 'react'


const Header = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

const Part = ({ content }) => {
  return (
    <div>
      <p>
        {content.name} {content.exercises}
      </p>
    </div>
  );
}

const Content = ({ content }) => {
  return (
    <div>
      <Part content={content[0]} />
      <Part content={content[1]} />
      <Part content={content[2]} />
    </div>
  );
}

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content content={course.parts} />
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
