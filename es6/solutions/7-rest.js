// convert this function so it doesnt' use prototye.slice.call
// but uses rest

function addOneToAll(...args) {
	args.forEach(function(el, i) {
		args[i]++;
	});
	console.log(args);
};

addOneToAll(1,2,3,4,5);
