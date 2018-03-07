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
				sourceMap: true // or "inline"
			},
			build: {
				files: [{
				    expand: true,
				    cwd: 'js/', // must be a string!
				    src: ['*.js'],
				    dest: 'generated/js'
				}]
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
