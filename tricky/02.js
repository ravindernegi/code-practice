var name = "Ravi";
name[1] = "aa";
console.log(name);

// Output : Ravi
// why this show Ravi. Becasue of String is immutable. This means that once a string is created, its value cannot be changed

// In JavaScript, strings are immutable, which means you cannot change a string directly. When you use string methods (like slice(), toUpperCase(), replace(), etc.), they create a new string rather than modifying the original string.

let str = "ravi";
let upperStr = str.toUpperCase();

console.log(str); // Output: ravi
console.log(upperStr); // Output: RAVI
