// Hoisting with funtion
func();

var func = () => {
  // This will the Hoisting
  console.log("First");
};
func();

function func() {
  // First time this function will be added in memory
  console.log("Second");
}
func();

/* 
Output will be:

Second 
First
First
*/
