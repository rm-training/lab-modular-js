// part 1:

var colors = ['red', 'green', 'blue'];
function colorString([r, g, b]) {
	console.log(r, g, b);
}

colorString(colors);

// part 2:
let [,greenColor,blueColor] = colors;
console.log("Extracted colors", greenColor, blueColor);

//
// part 3:
//
// Convert the code below to use spread in order to merge the arrays
// The result will be:
// ['red', 'green', 'blue', 'turqoise', 'purple', 'mauve']

const moreColors = ['turqoise', 'purple', 'mauve'];

const colorsCombined = [...colors, ...moreColors];
console.log("Colors combined:", colorsCombined);
