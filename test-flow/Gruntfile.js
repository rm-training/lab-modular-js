module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	const config = {
		files: {
			js: [
				'js/testfile.js',
				'js/testfile2.js'
			]
		},
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
		},
		copy: {
			build: {
				files: [{
					expand: true,
	    			cwd: 'public/',
	    			src: ['**/*.html'],
	    			dest: 'generated/'
	    		}]
			}
		},
		clean: {
		  generated: ['generated']
		},
		watch: {
			src: {
				files: ['<%= files.js %>'],
				tasks: ['default'],
				options: {
					spawn: false, // faster when turned off
				},
			},
		},
	};

	grunt.initConfig(config);

	grunt.registerTask('default', [
		'jshint',
		'babel',
		'watch'
	]);
};
