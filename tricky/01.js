// General Type Coercion Rules for == Comparison:
/*
1. Both operands are of the same type:
If both operands are the same type (e.g., both numbers, both strings, both booleans), they are directly compared.
*/

5 == 5; // true
"hello" == "hello"; // true
true == true; // true

/*
2. JavaScript converts the string to a number and then compares the values.
*/

"5" == 5; // true, because "5" is converted to number 5
"100" == 100; // true, because "100" is converted to number 100

/*
3. Comparing a boolean and another type:
JavaScript converts the boolean to a number (true becomes 1, false becomes 0).
*/
true == 1; // true
false == 0; // true
true == "1"; // true, "1" is converted to number 1

/*
4. Comparing null and undefined:
null and undefined are only equal to each other, and both are not equal to any other value.
*/
null == undefined; // true
null == 0; // false
undefined == 0; // false

/*
5. Comparing an object and a primitive:
If one operand is an object and the other is a primitive, the object is converted to a primitive using its valueOf() or toString() method. If that fails, it's converted to a string.
*/
[1] == "1"; // true, because the array is converted to the string "1"
console.log({ a: 1 } == "[object Object]"); // true, object is converted to string "[object Object]"

/*
6. Comparing two objects:
Two different objects are never equal, even if their contents are the same, because they are references, not primitive values.
*/
console.log({} == {}); // false, different objects

/*
7. String and Object:
When comparing a string to an object, JavaScript will first attempt to convert the object to a primitive value using the toString() or valueOf() method.
*/
"true" == new String("true"); // true, because the String object is converted to a primitive string "true"

// The comparison "true" == true returns **false** because of how JavaScript handles type coercion when using the == (loose equality) operator.

"true" == true; // false
// JavaScript will convert the boolean true to a number. In JavaScript, true becomes 1 when coerced to a number.
"true" == 1; // =>
// Now, JavaScript will try to convert the string "true" to a number. Since "true" is not a numeric string (it can't be parsed as a valid number), it gets converted to NaN (Not-a-Number).
NaN == 1;

/*
Here’s a simplified overview of what happens during coercion:
- Boolean + anything: Boolean is converted to a number (true becomes 1, false becomes 0).
- String + anything: The non-string operand is converted to a string.
- Number + anything (except object):  Non-number operand is converted to a number (unless it is NaN or a string that can be parsed as a number).
- Object + primitive: Object is converted to a primitive using toString() or valueOf().
*/
interesting facts of operand and datatype comparison in javascript