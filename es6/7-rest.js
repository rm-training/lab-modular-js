// When writing a function that accesses arguments - because it
// is not actually an array - we used to have to coerce it to an
// array using Array#slice
//
// This is no longer necessary in ES6+
//
// Part 1: Use the rest operator to convert this function
// so that it does not use Array.prototye.slice.call
//
function addOneToAll() {
	const args = Array.prototype.slice.call(arguments);
	args.forEach(function(el, i) {
		args[i]++;
	});
	console.log(args);
	return args;
};

addOneToAll(1,2,3,4,5); // 2,3,4,5,6
