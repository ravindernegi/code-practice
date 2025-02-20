// Tricky use case of .reduce() method  
// Flatten an Array of Arrays

const nestedArrays = [[1, 2], [3, 4], [5, 6]];

const flattened = nestedArrays.reduce((acc, current) => acc.concat(current), []);
console.log(flattened);  // Output: [1, 2, 3, 4, 5, 6]

// Count Occurrences of Items in an Array

const fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'banana'];

const countFruits = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(countFruits);  // Output: { apple: 2, banana: 3, orange: 1 }


//  Sum All Values in an Array
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);  // Output: 15


// Group Objects by a Property
const students = [
  { name: 'John', grade: 'A' },
  { name: 'Jane', grade: 'B' },
  { name: 'Mark', grade: 'A' },
  { name: 'Sara', grade: 'B' }
];

const groupedByGrade = students.reduce((acc, student) => {
  acc[student.grade] = acc[student.grade] || [];
  acc[student.grade].push(student);
  return acc;
}, {});

console.log(groupedByGrade);
// Output: { A: [ { name: 'John', grade: 'A' }, { name: 'Mark', grade: 'A' } ], B: [ { name: 'Jane', grade: 'B' }, { name: 'Sara', grade: 'B' } ] }

// Find Maximum or Minimum Value in an Array
const numbers = [5, 3, 8, 1, 9, 2];

const max = numbers.reduce((acc, num) => (num > acc ? num : acc), -Infinity);
console.log(max);  // Output: 9

// Remove Duplicates from an Array

const numbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = numbers.reduce((acc, num) => {
  if (!acc.includes(num)) {
    acc.push(num);
  }
  return acc;
}, []);

console.log(uniqueNumbers);  // Output: [1, 2, 3, 4, 5]

// Transform an Array of Objects into a Single Object

const arr = [{ key: 'name', value: 'Alice' }, { key: 'age', value: 30 }];

const obj = arr.reduce((acc, { key, value }) => {
  acc[key] = value;
  return acc;
}, {});

console.log(obj);  // Output: { name: 'Alice', age: 30 }

// Combine Multiple Arrays into One (without concat)

const arrays = [[1, 2], [3, 4], [5, 6]];

const merged = arrays.reduce((acc, current) => [...acc, ...current], []);
console.log(merged);  // Output: [1, 2, 3, 4, 5, 6]


/// This example uses reduce to create a running total (i.e., an array that shows the cumulative sum as you move through the original array):
const numbers = [1, 2, 3, 4, 5];

const runningTotal = numbers.reduce((acc, num, index) => {
  const lastSum = acc[index - 1] || 0;
  acc.push(lastSum + num);
  return acc;
}, []);

console.log(runningTotal);  // Output: [1, 3, 6, 10, 15]
