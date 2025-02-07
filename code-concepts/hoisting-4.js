// Hoisting
var age = 10;

(function () {
  console.log(age);
  var age = 20;
  console.log(age);
})();

console.log(age);

var age = 20;

/*
Output will be:
undefined // becasue line no. 5 var age =20 Re-initialized 
20
10
*/

console.log("Without var inside the function");
var count = 10;

(function () {
  console.log(count);
  count = 20;
  console.log(count);
})();

console.log(count);

var count = 30;

/*
Output will be:
10 
20
20
*/
