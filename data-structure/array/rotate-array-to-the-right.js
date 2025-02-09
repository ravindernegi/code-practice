function rotateRight(arr, k) {
  const n = arr.length;
  k = k % n; // Normalize the rotation if k is larger than the array length

  if (k === 0) return arr; // No rotation needed

  let rightPart = arr.slice(n - k); // Last k elements
  let leftPart = arr.slice(0, n - k); // First n-k elements

  return [...rightPart, ...leftPart]; // Concatenate right and left parts
}

let arr = [1, 2, 3, 4, 5];
let k = 2;
console.log(rotateRight(arr, k)); // Output: [4, 5, 1, 2, 3]
