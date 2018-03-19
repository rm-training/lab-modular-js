//
// Part 1:
// Without moving or removing any of the existing variables
// Finish creating the dog object
// using object shorthand
//
// Part 2:
// What would happen if you changed all the 'let's to 'const'
// Would you be able to modify the properties once they are
// assigned in the object?
// ex:
//   const type = 'Fido';
//   dog.type = 'Tim';
//   this.type = 'Tim';

let type = 'dog';
let name = 'Fido';
let age = 9;
let sound = 'bark';

const dog = {}

dog.speak(); // 'Fido says: "Bark"'

console.assert(dog.type === type);
console.assert(dog.name === name);
console.assert(dog.age === age);
console.assert(dog.sound === sound);
console.assert(typeof dog.speak === 'function');

