#### Some JavaScript notes from the course. Disclaimer to people checking this file out with a learning purpose: I am not completely new to JS, and have only written down some bits here and there.
---

- In JavaScript, it's best to avoid declaring variable with the `var` keyword. Prefer `let` and `const`.

#### Arrays
- How to use `forEach()`:
  ```
  array.forEach(value => {
    console.log(value)
  });
  ```
- How to use `map()`:
  ```
  const t = [1, 2, 3]
  const m1 = t.map(value => value * 2)
  console.log(m1)   // [2, 4, 6] is printed
  ```
- Individual items of an array are easy to assign to variables with the help of the destructuring assignment:<br>
  ```
  const t = [1, 2, 3, 4, 5]
  const [first, second, ...rest] = t

  console.log(first, second)  // 1, 2 is printed
  console.log(rest)           // [3, 4 ,5] is printed
  ```

#### Objects
- One way of defining objects is using object literals:
  ```
  const object = {
    name: {
      first: 'Sonja',
      last: 'Ek',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
  }
  ```
  - The properties of an object are referenced by using the "dot" notation, or by using brackets.
  - Variables with whitespaces require bracket notation (in addition to quotation marks).
- Objects in JavaScript can have methods of their own.
  - More on object methods can be found here: https://fullstackopen.com/en/part1/java_script#object-methods-and-this
  - Not an important topic on the course.

#### Functions
- Basic syntax of an arrow function:
  ```
  const arFun = (argument, another) => {
    console.log(argument)
    return another
  }
  ```
- Exclude parentheses when there's only one parameter:<br>
  ```
  const arFun2 = p => {
    console.log(p)
    return p*p
  }
  ```
- Exclude even more stuff if the function only returns a value:
  ```
  const arFun3 = p = p*p
  ```
- The shortest form is handy with mapping:
  ```
  const t = [1, 2, 3]
  const tSquared = t.map(p => p * p)  // tSquared is now [1, 4, 9]
  ```
- A function doesn't need a name when it's defined using a function expression:
  ```
  const average = function(a, b) {
    return (a + b) / 2
  }
  const result = average(2, 5)
  ```

- The functions in JavaScript are, in reality, also **closures**.
  - They have access to variables that are defined outside of the function!
  
#### Classes
- ES6's `class` syntax simulates Java's object-oriented classes.
  ```
  class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    greet() {
      console.log('hello, my name is ' + this.name)
    }
  }
  const adam = new Person('Adam Ondra', 35)
  adam.greet()
  ```
  - Not used in React Hooks, but prevalent in older React and Node.js.
