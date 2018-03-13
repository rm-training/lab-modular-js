// convert this function so it doesnt' use prototye.slice.call
// but uses rest

function addOneToAll(...args) {
	args.forEach(function(el, i) {
		args[i]++;
	});
	console.log(args);
};

addOneToAll(1,2,3,4,5);

// update the function to use reduce

// update the function to destructure an array that is passed in
