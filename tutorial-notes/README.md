# Notes

## Part 1: React
### Part 1a: Introduction to React

- Create and run a React app through terminal:<br>
  `npx create-react-app [foldername]`<br>
  `cd [foldername]`<br>
  `npm start`

- JSX is recommended to be used with React to describe what the UI should look like.
  - In JSX, every tag needs to be closed: for example \<br> doesn't work for newline, \<br /> does.

- The content of a React component usually needs to contain one root element.
  - The root element is stipulated, so \<div> tags in the DOM tree can be made empty: <>



### Part 1b: JavaScript
See JavaScript-specific notes in javascript-notes.md

- A lot of code run in browsers has been transpiled from a newer JS version to an older, more compatible one.
- Transpilation is automatically configured in React applications created with create-react-app.
- When using React, techniques from functional programming are preferred.
  - The use of immutable data structures is characteristic to functional programming.
  - Use `concat()` rather than `push()`, for example.<br>
    `const t2 = t.concat(5);`



### Part 1d: Complex state, debugging

- Rules for Hooks: The useState function (as well as the useEffect function introduced later on in the course) must not be called from inside of a loop, a conditional expression, or any place that is not a function defining a component. This must be done to ensure that the hooks are always called in the same order, and if this isn't the case the application will behave erratically.
- One way to define an event handler is to use function that returns a function.
- Never define components inside of other components.  The biggest problems are due to the fact that React treats a component defined inside of another component as a new component in every render. This makes it impossible for React to optimize the component.
