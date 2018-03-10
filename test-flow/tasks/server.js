module.exports = function(grunt) {

	var express = require('express');

	grunt.registerMultiTask('server', 'static file dev server', function() {
		// tell grunt this task is asynchronous
		// but this will never release the task
		// so if I'm stacking "server" with "watch" I should comment this out
		//const done = this.async();

		const app = express();
		const port = this.data.port || 8000;
		const webRoot = this.data.base || 'dist';

		app.use(express.static('' + (process.cwd()) + '/' + webRoot));

		app.listen(port);

		grunt.log.writeln(
			`Starting Server:${this.target}`
		);
		grunt.log.writeln(
			`Starting express server in "${webRoot}" at http://localhost:${port}`
		);

		return app;
	});

}
