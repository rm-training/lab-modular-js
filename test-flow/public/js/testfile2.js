var a = 1;
var b = 2;
console.group('Test file 2');
console.log('I am test file 1');
console.log('I have var a:', a);
console.log('And I have var b:', b);

a = a + b;

console.log('I changed a to', a);
console.groupEnd();
