// Spread and Destructuring
//

//
// Part 1:
// Convert the colorString() function to use spread
// so that we can call it with an array of arguments:
//  ex: colorString(colors);
//

const colors = ['red', 'green', 'blue'];

function colorString(color1, color2, color3) {
	console.log(color1, color2, color3);
}

colorString(colors[0], colors[1], colors[2]);


// HEY THERE!
// WHEN YOU ARE READY TO MOVE TO THE NEXT PART
// MOVE THIS RETURN STATEMENT DOWN
return;

//
// Part 2:
//
// Convert this code so it does not use the index of the array to extract the values
// Use spread to extract the second and third values into the new variables, greenColor and blueColor
let greenColor = colors[1];
let blueColor = colors[2];

console.log("Extracted colors", greenColor, blueColor);

//
// part 3:
//
// Convert the code below to use spread in order to merge the arrays
// The result will be:
// ['red', 'green', 'blue', 'turqoise', 'purple', 'mauve']

const moreColors = ['turqoise', 'purple', 'mauve'];

const colorsCombined = [];
for (let i=0; i<moreColors.length; i++) {
	colorsCombined.push(moreColors[i]);
}
console.log("Colors combined:", colorsCombined);
