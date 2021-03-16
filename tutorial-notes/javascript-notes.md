#### Some JavaScript notes from the course. Disclaimer to people checking this file out with a learning purpose: I am not completely new to JS, and have only written down some bits here and there.
---

- In JavaScript, it's best to avoid declaring variable with the `var` keyword. Prefer `let` and `const`.

#### Arrays
- How to use `forEach()`: <br>
  `array.forEach(value => {`<br>
    `console.log(value)`<br>
  `});`
- How to use `map()`:<br>
  `const t = [1, 2, 3]`<br>
  `const m1 = t.map(value => value * 2)`<br>
  `console.log(m1)`   // [2, 4, 6] is printed
- Individual items of an array are easy to assign to variables with the help of the destructuring assignment:<br>
  ```const t = [1, 2, 3, 4, 5]
  const [first, second, ...rest] = t

  console.log(first, second)  // 1, 2 is printed
  console.log(rest)           // [3, 4 ,5] is printed
  ```

#### Objects
- One way of defining objects is using object literals:<br>
  `const object = {`<br>
    `name: {`<br>
      `first: 'Sonja',`<br>
      `last: 'Ek',`<br>
    `},`<br>
    `grades: [2, 3, 5, 3],`<br>
    `department: 'Stanford University',`<br>
  `}`<br>
  - The properties of an object are referenced by using the "dot" notation, or by using brackets.
  - Variables with whitespaces require bracket notation (in addition to quotation marks).
- Objects in JavaScript can have methods of their own.
  - More on object methods can be found here: https://fullstackopen.com/en/part1/java_script#object-methods-and-this
  - Not an important topic on the course.

#### Functions
- Basic syntax of an arrow function:<br>
  `const arFun = (argument, another) => {`<br>
    `console.log(argument)`<br>
    `return another`<br>
  `}`<br>
- Exclude parentheses when there's only one parameter:<br>
  `const arFun2 = p => {`<br>
    `console.log(p)`<br>
    `return p*p`<br>
  `}`<br>
- Exclude even more stuff if the function only returns a value:<br>
  `const arFun3 = p = p*p`<br>
- The shortest form is handy with mapping:<br>
  `const t = [1, 2, 3]`<br>
  `const tSquared = t.map(p => p * p)`  // tSquared is now [1, 4, 9]<br>
- A function doesn't need a name when it's defined using a function expression:<br>
  `const average = function(a, b) {`<br>
    `return (a + b) / 2`<br>
  `}`<br>
  `const result = average(2, 5)`<br>
  
#### Classes
- ES6's `class` syntax simulates Java's object-oriented classes.<br>
  `class Person {`<br>
    `constructor(name, age) {`<br>
      `this.name = name`<br>
      `this.age = age`<br>
    `}`<br>
    `greet() {`<br>
      `console.log('hello, my name is ' + this.name)`<br>
    `}`<br>
  `}`<br>
  `const adam = new Person('Adam Ondra', 35)`<br>
  `adam.greet()`
  - Not used in React Hooks, but prevalent in older React and Node.js.
