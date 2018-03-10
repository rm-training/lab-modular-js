import mod2 from './testfile2';

let a = 1;
console.group('Test file 1!');
console.log('I am test file 1');
console.log('I have var a:', a);

a++;

console.log('I changed a to', a);

// this assert will fail depending on the order of script load...
setTimeout(function(){
	console.assert(a===2, 'Someone changed a and it wasn\'t me!');
}, 1000);

mod2.init();

console.groupEnd();

export default a;
