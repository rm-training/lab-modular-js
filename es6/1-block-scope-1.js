// Part 1:
// Create two functions that share TWO non-global variables
//   a - a number  - 0
//   b - an object with a numeric property, x - {x:0}
// both functions will use console.log() to inspect the value of these variables
// and increment their numeric value each time the function(s) are called
//   a++;
//   b.x++;
//
// Part 2:
// Write a third function that has it's own scoped variables
//   of the same names -- that also increments it's value for each call
//
// Part 3:
// Create an if statement that has it's own scoped variables
//   of the same name  -- that also increments it's value
//
// Part 4:
// Make sure all variable declarations are using let or const
// where most appropriate.

var a = 0;

function one() {
	a++;
	console.log(a);
}

// don't forget to call your function(s)

one();

