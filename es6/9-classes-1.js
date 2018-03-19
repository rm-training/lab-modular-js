// Class
//
// credit: https://marijnhaverbeke.nl/talks/es6_falsyvalues2015
//
// Write a class called Point
//
// which represents a point in two-dimensional space.
// A point has x and y properties,
// given as arguments to its constructor.
//
// It also has a single method plus,
// which takes another point and returns the sum of the two points,
// that is, a new point whose x is the sum of the x properties
// of the two original points, and whose y is the sum of
// their y properties.

// YOUR CODE HERE

console.log(new Point(1, 2).plus(new Point(2, 1)))
// Should output → Point{x: 3, y: 3}


// tests...
console.assert(new Point(1, 2) instanceof Point);
console.assert(new Point(1, 2).plus(new Point(2, 1)).x === 3);
console.assert(new Point(2, 3).plus(new Point(4, 5)).y === 8);
console.assert(new Point(2, 3).plus(new Point(4, 5)).x === 6);
