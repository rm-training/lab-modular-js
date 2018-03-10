define('testfile2', function() {
	let a = 10;
	let b = 20;
	console.group('Test file 2');
	console.log('I am test file 1');
	console.log('I have var a:', a);
	console.log('And I have var b:', b);

	a = a + b;

	console.log('I changed a to', a);
	console.assert(a===30, 'Someone changed a and it wasn\'t me!');
	console.groupEnd();

	function reload() {
		console.log('Reloading from module 2', a, b);
	}

	return {
		init: function() {
			console.log('Initializing from module 2');
		},
		reload: reload
	};
});
