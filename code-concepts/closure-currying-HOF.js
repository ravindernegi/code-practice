/*
Relationship Between Them:
 - Closures are often used to implement currying and higher-order functions.
 - Currying relies on closures to remember the arguments passed to the outer functions.
 - Higher-order functions can return closures or accept functions as arguments.
*/

// Higher-order function that returns a curried function using closures
function createMultiplier(x) {
  return function (y) {
    return x * y; // Closure remembers 'x'
  };
}

// Curried function
const double = createMultiplier(2); // Partial application: x = 2
console.log(double(5)); // 10 (2 * 5)

const triple = createMultiplier(3); // Partial application: x = 3
console.log(triple(5)); // 15 (3 * 5)

/*
Explanation:
`createMultiplier` is a `higher-order function` because it returns a function.
The returned function forms a `closure` because it remembers the value of x.
The function is `curried` because it takes one argument at a time (x first, then y).
*/
