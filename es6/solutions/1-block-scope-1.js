// Part 1:
// Create two functions that share TWO non-global variables
//   a - a number  - 0
//   b - an object with a numeric property, x - {x:0}
// both functions will use console.log() to inspect the value of these variables
// and increment their numeric value each time the function(s) are called
//   a++;
//   b.x++;
//


let a = 0;
const b = {x:0};

function one() {
	a++;
	b.x++;
	console.log("From one", a, b);
}

function two() {
	a++;
	b.x++;
	console.log("From two", a, b);
}

one();
two();


// Part 2:
// Write a third function that has it's own scoped variables
//   of the same names -- that also increments it's value for each call

function three() {
	let a = 0;
	const b = {x:0};
	a++;
	b.x++;
	console.log("From three", a, b);
}

three();

// Part 3:
// Create an if statement that has it's own scoped variables
//   of the same name  -- that also increments it's value
//
// Part 4:
// Make sure all variable declarations are using let or const
// where most appropriate.


if (1) {
	let a = 0;
	let b = {x:0};

	a++;
	b.x++;
	console.log("From if", a, b);
}
