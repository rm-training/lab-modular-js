// part 1:

var colors = ['red', 'green', 'blue'];
function colorString([r, g, b]) {
	console.log(r, g, b);
}

colorString(colors);

// part 2:
var [,,blue] = colors;

console.log("The third color is " + blue);

// part 3:

var moreColors = ['turqoise', 'purple', 'mauve'];

var colorsCombined = colors;
for (var i=0; i<moreColors.length; i++) {
	colorsCombined.push(moreColors[i]);
}
console.log("Colors combined:", colorsCombined);
console.assert(colors !== colorsCombined, "Colors array should not be modified by combining");
