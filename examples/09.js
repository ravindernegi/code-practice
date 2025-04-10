// Event Loop : Javascript questions

console.log("Start");

setTimeout(function () {
  console.log("Hit");
}, 0);

Promise.resolve().then(() => {
  console.log("Done");
});

console.log("End");
