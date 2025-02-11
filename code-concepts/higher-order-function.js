/**
 * A higher-order function is a function that either: 
 Takes one or more functions as arguments, or Returns a function as its result.
 Key Points:
 - Higher-order functions enable functional programming patterns like map, filter, and reduce.
 - They allow for abstraction and reusability by treating functions as first-class citizens.
 * */
console.log("************ Example 1 ************");
// Higher-order function that takes a function as an argument
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback(); // Executing the callback function
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye); // Logs: "Hello, Alice!" and "Goodbye!"
