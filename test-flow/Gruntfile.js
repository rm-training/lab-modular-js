module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	const config = {
		files: {
			js: [
				'public/js/testfile.js',
				'public/js/testfile2.js'
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
				    cwd: 'public/js/', // must be a string!
				    src: ['*.js'],
				    dest: 'generated/js'
				}]
			}
		},
		copy: {
			generated: {
				files: [{
					expand: true,
	    			cwd: 'public/',
	    			src: ['**/*.html'],
	    			dest: 'generated/'
	    		}]
			},
			dist: {
				files: [{
					expand: true,
	    			cwd: 'public/',
	    			src: ['**/*.html'],
	    			dest: 'generated/'
	    		}]
			}
		},
		clean: {
		  generated: ['generated'],
		  dist: ['dist']
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
		uglify: {
			options: {
				// banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
				// 	'<%= grunt.template.today("yyyy-mm-dd") %> */',
				sourceMap: {
					includeSources: true
				},
				mangle: true
			},
			dist: {
				files: {
					'dist/js/all.min.js': [
						'generated/js/testfile.js',
						'generated/js/testfile2.js'
					]
				}
			},
		},
		processhtml: {
		    build: {
		    	files: {
		    		'dist/index.html': ['public/index.html']
		    	}
		    },
		}
	};

	grunt.initConfig(config);

	grunt.registerTask('default', [
		'jshint',
		'babel',
		'watch'
	]);

	grunt.registerTask('build', [
		'clean',
		'babel',
		'copy',
		'uglify',
		'processhtml'
	]);
};
