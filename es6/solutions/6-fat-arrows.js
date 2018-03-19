// convert the functions to arrow-function format
// where appropriate

// Part 1

// no: function declaration should not be converted to an arrow
// arrow functions are not hoisted
one();
function one () {
	console.log('I am a function declaration');
}

// yes: we can convert this if we want
const two = () => {
	console.log('I am a function expression');
}
two();

// Part 2

// no: you can't switch to arrow functions because the scope will change
// but: you can use the object short-and
const table = {
	id: 1,
	rows: new Map(),
	// shorthand is ok
	addRow(row) {
		this.rows.set(row.id, row);
	},
	// or leave as is
	removeRow: function(row) {
		if (this.rows.has(row.id)) {
			this.rows.delete(row.id);
		}
	}
}

// no: you can't switch a constructor
// context matters here!
const Row = function (table, id, data) {
	this.id = id;
	this.table = table;
	this.data = data;
}

// yes: no use of context (this) here
Row.resortRows = (rows) => {
	console.log('I will resort all given rows', rows);
}

// no: you can't switch this because context matters
// you could switch a STATIC method, however
Row.prototype.render = function() {
	// yes! this is a perfect place for it
	this.data.forEach((col) => {
		console.log('Row', this.id, 'Col', col);
	});
}

// testing
const rowOne = new Row(table, 1, [1,2,3]);
table.addRow(rowOne);
table.removeRow(rowOne);
rowOne.render();
