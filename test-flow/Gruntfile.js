module.exports = function(grunt) {
	const config = {
		jshint: {
			options: {
				esversion: 6,
			},
			src: [
				'Gruntfile.js',
				'public/js/*.js'
			]
		},
		babel: {
			options: {
				sourceMap: true
			},
			build: {
				src: 'testfile.js',
				dest: 'testfile-out.js'
			}
		}
	};

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-babel');

	grunt.initConfig(config);

	grunt.registerTask('default', [
		'jshint',
		'babel'
	]);
};
