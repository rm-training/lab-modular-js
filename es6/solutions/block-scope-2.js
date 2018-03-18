
// This is a typical mistake to make in JavaScript.
// We create a number of functions in a loop,
// and refer to an outside variable from these functions.
// all of them will end up referring to the same variable,
// which ends up being incremented to 10.
// Thus, callbacks[2] does not log 2.
// It logs 10, as do all functions in the array.

var callbacks = [];
for (let i = 0; i < 10; i++) {
  callbacks.push(function() {
  	return i;
  });
}

console.log(callbacks[2]());

console.assert(callbacks[2]() === 2, "The second callback should return 2");
console.assert(callbacks[3]() === 3, "The third callback should return 3");
