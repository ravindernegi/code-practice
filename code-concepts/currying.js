/**
 Currying is a technique where a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument. It allows you to partially apply a function, creating a new function with some arguments pre-filled.
 Key Points:
- Currying breaks down a function into a series of unary (single-argument) functions.
- It enables partial application, where you can fix some arguments and create a new function with the remaining arguments.
- Useful for creating reusable and composable functions.
 **/
// A function that adds two numbers, but implemented using currying
function add(a) {
  return function (b) {
    return a + b;
  };
}

// Usage
const add5 = add(5); // This returns a function where a = 5
console.log(add5(3)); // Output: 8 (5 + 3)

const add10 = add(10); // This returns a function where a = 10
console.log(add10(7)); // Output: 17 (10 + 7)
