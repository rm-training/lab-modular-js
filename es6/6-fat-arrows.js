// Arrow functions offer short syntax and a static context
// they are NOT a drop-in replacement for plain function declarations/statements.
//
// Your assignment:
// Convert the functions to arrow-function format where appropriate

//
// Part 1
//
//

one();

function one() {
	console.log('I am a function declaration');
}

const two = function () {
	console.log('I am a function expression');
}

two();

// HEY THERE!
// WHEN YOU ARE READY TO MOVE TO THE NEXT PART
// REMOVE THIS RETURN STATEMENT
return;

//
// Part 2
//
//

const table = {
	id: 1,
	rows: new Map(),
	addRow: function(row) {
		this.rows.set(row.id, row);
	},
	removeRow: function(row) {
		if (this.rows.has(row.id)) {
			this.rows.delete(row.id);
		}
	}
}

const Row = function (table, id, data) {
	this.id = id;
	this.table = table;
	this.data = data;
}

// static method(s)
Row.resortRows = function(rows) {
	console.log('I will resort all given rows', rows);
}

// inherited method(s)
Row.prototype.render = function() {
	const self = this;
	this.data.forEach(function(col) {
		console.log('Row', this.id, 'Col', col);
	});
}

// testing
const rowOne = new Row(table, 1, [1,2,3]);
table.addRow(rowOne);
table.removeRow(rowOne);
rowOne.render();
