// Class
//
// credit: https://marijnhaverbeke.nl/talks/es6_falsyvalues2015
//
// Write a class called Point
//
// It represents a point in two-dimensional space.

// A point has x and y properties, given as arguments to its constructor.
//
// It has a single method:
//   Point#plus;
// which takes another point and returns the sum of the two points,
// that is, a new point whose x is the sum of the x properties
// of the two original points, and whose y is the sum of their y properties.

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	plus(point) {
		return new Point(this.x + point.x, this.y + point.y);
	}
};

console.log(new Point(1, 2).plus(new Point(2, 1)));
// Should output Point{x: 3, y: 3}

// tests...
console.assert(new Point(1, 2) instanceof Point);
console.assert(new Point(1, 2).plus(new Point(2, 1)).x === 3);
console.assert(new Point(2, 3).plus(new Point(4, 5)).y === 8);
console.assert(new Point(2, 3).plus(new Point(4, 5)).x === 6);
