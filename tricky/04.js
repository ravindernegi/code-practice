// One tricky aspect of splice() is that it modifies the original array directly. It doesn't return a new array but instead alters the one you call it on.
let arr = [1, 2, 3, 4];
let removed = arr.splice(1, 2); // Removes 2 elements starting from index 1
console.log(arr); // [1, 4]
console.log(removed); // [2, 3]

/*
The splice() method has three parameters:
start (required): The index at which to start changing the array.
deleteCount (optional): The number of elements to remove (if any).
item1, item2, ... (optional): Elements to add to the array, starting from the start index.
If no deleteCount is provided, it will remove all elements from the start index onward.
*/
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, 'a', 'b'); // Starting at index 2, remove 0 elements, insert 'a' and 'b'
console.log(arr); // [1, 2, 'a', 'b', 3, 4, 5]

// Negative Indices

let arr = [1, 2, 3, 4, 5];
arr.splice(-2, 1); // Removes 1 element from the second-to-last position
console.log(arr); // [1, 2, 3, 5]

// When you add multiple items, the array is restructured, and the new items are inserted at the correct position, pushing the existing ones.
let arr = ['apple', 'banana', 'cherry'];
arr.splice(1, 0, 'kiwi', 'grape');
console.log(arr); // ['apple', 'kiwi', 'grape', 'banana', 'cherry']

// If the start index is larger than the array length, splice() does nothing (unless you're inserting items).

let arr = [1, 2, 3];
arr.splice(10, 1, 'a'); // Start index is out of range
console.log(arr); // [1, 2, 3, 'a']

// The splice() method returns an array of the removed elements. If no elements were removed, it returns an empty array.
let arr = [10, 20, 30, 40];
let removed = arr.splice(1, 2); // Removes 20 and 30
console.log(removed); // [20, 30]
