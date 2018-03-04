module.exports = function(grunt) {

	require('jit-grunt')(grunt)({
		customTasksDir: 'tasks'
	});

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {
				esversion: 6,
			},
			all: ['Gruntfile.js', 'public/js/*.js']
		},
	    babel: {
	        options: {
	            sourceMap: true
	        },
	        vendor: {
	        	files: [{
	                expand: true,
	                cwd: 'public/js/vendor',
	                src: ['**/*.js'],
	                dest: 'generated/js/vendor/'
	            }]
	        },
	        app: {
	            files: [{
	                expand: true,
	                cwd: 'public/js/',
	                src: ['*.js'],
	                dest: 'generated/js/'
	            }]
	        }
	    },
	    uglify: {
		    options: {
		    	banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
		    		'<%= grunt.template.today("yyyy-mm-dd") %> */',
				sourceMap: true,
				mangle: {
					// don't rename these
					reserved: ['jQuery', 'Backbone']
				}
			},
			app: {
				files: {
					'dist/js/all.min.js': ['generated/js/*.js']
				}
			},
			vendor: {
				files: {
					'dist/js/vendor/all.min.js': ['generated/js/vendor/**/*.js']
				}
			}
		},
	    copy: {
	    	generated: {
    			expand: true,
    			cwd: 'generated/',
    			src: ['**/*.html'],
    			dest: 'generated/'
    		},
    		dist: {
    			expand: true,
    			cwd: 'dist/',
    			src: ['**/*.html'],
    			dest: 'dist/'
    		},
	    },
	    clean: {
		  generated: ['generated'],
		  dist: ['dist']
		},
		watch: {
			scripts: {
				files: ['public/js/**/*.js'],
				tasks: ['generate'],
				options: {
					spawn: false, // faster when turned off
				},
			},
		}
	});

	// generate the built javascript for dev
	grunt.registerTask('generate', [
    	'newer:jshint',
    	'newer:babel',
    	'copy:generated'
	]);

	// build the distribution files
	grunt.registerTask('build', [
    	'generate',
    	'uglify',
    	'copy'
	]);

	// generate and watch
    grunt.registerTask('default', [
    	'generate',
    	'watch'
	]);
};
