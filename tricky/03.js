const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

// Using positive start index
const sliceExample = fruits.slice(1);
console.log(sliceExample); // [ "Banana", "Orange", "Mango", "Pineapple"]

// Using positive start index positive end index
const sliceExample = fruits.slice(1, 4);
console.log(sliceExample); // [ "Banana", "Orange", "Mango"]

// Using negative start index
const sliceExample = fruits.slice(-2);
console.log(sliceExample); // ["Mango", "Pineapple"]

// Using positive start index and negative end index
const sliceExample = fruits.slice(1, -2);
console.log(sliceExample); // ["Banana", "Orange"]

// Positive indices:
// Both start and end are straightforward — the slice starts at the start index (inclusive) and stops just before the end index (exclusive).
// Negative indices:
// The start index counts from the end, and the end index is exclusive (meaning it excludes the element at the negative index).
