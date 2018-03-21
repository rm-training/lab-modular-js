// Write an expression using higher-order array methods
// filter, reduce, map
// to compute the total value of the machines in the inventory array.

const inventory = [
  {type:   "machine", value: 5000},
  {type:   "machine", value:  650},
  {type:      "duck", value:   10},
  {type: "furniture", value: 1200},
  {type:   "machine", value:   77}
]

let totalMachineValue = 0;

// YOUR CODE HERE
totalMachineValue = inventory
	.filter((element) => {
		return element.type === "machine";
	})
	.reduce((acc, curr) => {
		return acc+curr.value;
	}, 0);
// END YOUR CODE

console.log(totalMachineValue);
console.assert(totalMachineValue === 5727);
