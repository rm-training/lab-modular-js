module.exports = function(grunt) {

	require('jit-grunt')(grunt);

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
	        dist: {
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
	});

	grunt.registerTask('sayhi', 'Say hello.', function() {
		grunt.log.write('Hello!').ok();
	});

    grunt.registerTask('default', [
    	'sayhi',
    	'jshint',
    	'babel',
    	'uglify',
    	'copy'
	]);
};
