function log(...args) {
	if (
		console &&
		console.log &&
		typeof console.log === 'function'
	) {
		// allow console logging
		console.log(...args);
	}
	// and maybe send it to my log system
	logSystem.send('Console Log', ...args);
}

function cache(...args) {
	// @todo cache it
}
