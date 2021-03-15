# Notes

### Part 1: React
## Part 1a: Introduction to React

- The code inside our functions is JSX, a syntax extension to JavaScript.
- JSX is recommended to be used with React to describe what the UI should look like.

- In practice, JSX is much like HTML with the distinction that with JSX you can easily embed dynamic content by writing appropriate JavaScript within curly braces.
- The idea of JSX is quite similar to many templating languages, such as Thymeleaf used along with Java Spring, which are used on servers.

- In JSX, every tag needs to be closed: for example <br> doesn't work for newline, <br /> does.

- The idea of a root component called App, at the top of the component tree of the application, is a strong convention in React.

- The content of a React component usually needs to contain one root element, which in the App component is the div-element.
  - The root element is stipulated, so <div> tags in the DOM tree can be made empty: <>
  - An array of components is also a valid solution, but not wise or pretty.
