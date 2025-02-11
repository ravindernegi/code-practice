/**
 A closure is a function that "remembers" the environment in which it was created, even after that environment has gone out of scope. It allows a function to access variables from its outer (enclosing) function, even after the outer function has finished executing.
Key Points:
- Closures are created when a function is defined inside another function.
- They "remember" the environment (variables) of the outer function.
- Commonly used for data encapsulation, private variables, and callbacks.
**/

console.log("************ Example 1 ************");
function createCounter() {
  let count = 0; // Private variable

  return function () {
    count++; // Accessing and modifying the private variable
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Create three level closure
console.log("************ Example 2 ************");
function createCounter2() {
  let count = 0; // Private variable

  return function () {
    count++; // Accessing and modifying the private variable
    return function () {
      return `count is ${count}`;
    };
  };
}

const counter2 = createCounter2();

counter2();
counter2();
console.log(counter2()()); // count is 3

console.log("************ Example 3 ************");
function levelOne(levelOneVar) {
  // levelOne defines levelTwo
  return function levelTwo(levelTwoVar) {
    // levelTwo defines levelThree
    return function levelThree(levelThreeVar) {
      console.log("Level One Variable: " + levelOneVar);
      console.log("Level Two Variable: " + levelTwoVar);
      console.log("Level Three Variable: " + levelThreeVar);
    };
  };
}

const closureExample = levelOne("I am from Level One");
const closureExampleTwo = closureExample("I am from Level Two");
closureExampleTwo("I am from Level Three");
