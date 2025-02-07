global.demo2 = "Hello, World!"; // this is the gobal variable as like window object in browser

var demo;
console.log(demo); // should log 'undefined' because it's declared but not assigned

// TDZ starts at beginning of scope
const func = () => console.log(letVar); // OK

// Within the TDZ letVar access throws `ReferenceError`

let letVar = 3; // End of TDZ (for letVar)
func(); // Called outside TDZ!
