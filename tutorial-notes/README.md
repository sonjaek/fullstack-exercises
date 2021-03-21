# Notes

## Part 1: React
### Part 1a: Introduction to React

- Create and run a React app through terminal:<br>
  `npx create-react-app [foldername]`<br>
  `cd [foldername]`<br>
  `npm start`

- The code inside the functions in the tutorial code is JSX, a syntax extension to JavaScript.
  - JSX is recommended to be used with React to describe what the UI should look like.
  - In practice, JSX is much like HTML with the distinction that with JSX you can easily embed dynamic content by writing appropriate JavaScript within curly braces.
  - The idea of JSX is quite similar to many templating languages, such as Thymeleaf used along with Java Spring, which are used on servers.
  - In JSX, every tag needs to be closed: for example \<br> doesn't work for newline, \<br /> does.



- The idea of a root component called App, at the top of the component tree of the application, is a strong convention in React.
- The content of a React component usually needs to contain one root element, which in the App component is the div-element.
  - The root element is stipulated, so \<div> tags in the DOM tree can be made empty: <>
  - An array of components is also a valid solution, but not wise or pretty.



### Part 1b: JavaScript
See JavaScript-specific notes in javascript-notes.md

- The current JavaScript standard is ECMAScript 11.
- A lot of code run in browsers has been transpiled from a newer JS version to an older, more compatible one.
- Transpilation is automatically configured in React applications created with create-react-app.
- Node.js is a JavaScript runtime environment based on Google's Chrome V8 JavaScript engine and works practically anywhere - from servers to mobile phones.
- When using Reach, techniques from functional programming are preferred.
  - The use of immutable data structures is characteristic to functional programming.
  - Use `concat()` rather than `push()`, for example.<br>
    `const t2 = t.concat(5);`
    - Creates a new array in which the content of the old array and the new item are both included.



### Part 1d: Complex state, debugging

- Rules for Hooks: The useState function (as well as the useEffect function introduced later on in the course) must not be called from inside of a loop, a conditional expression, or any place that is not a function defining a component. This must be done to ensure that the hooks are always called in the same order, and if this isn't the case the application will behave erratically.
- One way to define an event handler is to use function that returns a function.
- Never define components inside of other components.  The biggest problems are due to the fact that React treats a component defined inside of another component as a new component in every render. This makes it impossible for React to optimize the component.