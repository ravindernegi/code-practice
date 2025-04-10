// Event Loop : Javascript question

console.log("Start");

setTimeout(function () {
  console.log("Hit");
}, 0);

fetch("https://jsonplaceholder.typicode.com/posts/1").then(() => {
  console.log("Got the Data");
});

console.log("End");
