// Spread
//
// Part 1:
// Convert this colorString() function to use spread
//

var colors = ['red', 'green', 'blue'];

function colorString(color1, color2, color3) {
	console.log(color1, color2, color3);
}

colorString(colors[0], colors[1], colors[2]);


// part 2:
var [,,blue] = colors;

console.log("The third color is " + blue);

// part 3:

var moreColors = ['turqoise', 'purple', 'mauve'];

var colorsCombined = colors; // careful
for (var i=0; i<moreColors.length; i++) {
	colorsCombined.push(moreColors[i]);
}
console.log("Colors combined:", colorsCombined);
console.assert(colors !== colorsCombined, "Colors array should not be modified by combining");
