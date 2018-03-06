module.exports = function(grunt) {

	require('jit-grunt')(grunt)({
		customTasksDir: 'tasks'
	});

	grunt.initConfig({
		// set up file lists to manage order
		files: {
			generated: {
				css: {
					app: [],
					vendor: [
						'generated/css/vendor/bootstrap.min.css'
					]
				},
				js: {
					app: [
						'generated/js/app.js'
					],
					vendor: [
						'generated/js/vendor/popper.min.js',
						'generated/js/vendor/jquery.min.js',
						'generated/js/vendor/bootstrap.min.js',
					],
				},
			}
		},
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {
				esversion: 6,
			},
			all: ['Gruntfile.js', 'public/js/*.js']
		},
		// babel js and put in generated/js
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
	    // minify all generated/js and put it in dist/js
	    // at this stage, order of input files matters here
	    uglify: {
		    options: {
		    	banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
		    		'<%= grunt.template.today("yyyy-mm-dd") %> */',
				sourceMap: {
					includeSources: true
				},
				mangle: false
			},
			app: {
				files: {
					'dist/js/all.min.js': ['<%= files.generated.js.app %>']
				}
			},
			vendor: {
				files: {
					'dist/js/vendor/all.min.js': ['<%= files.generated.js.vendor %>']
				}
			}
		},
		cssmin: {
			options: {
				mergeIntoShorthands: false,
				roundingPrecision: -1,
				sourceMap: true,
				sourceMapInlineSources: true
			},
			generated: {
				files: [{
					expand: true,
					cwd: 'public/css',
					src: ['*.css'],
					dest: 'generated/css',
					ext: '.min.css'
				},
				{
					expand: true,
					cwd: 'public/css/vendor',
					src: ['**/*.css'],
					dest: 'generated/css/vendor',
					ext: '.min.css'
				}]
			},
			dist: {
				files: [{
					'dist/css/app.min.css': ['<%= files.generated.css.app %>']
				},
				{
					'dist/css/vendor/all.min.css': ['<%= files.generated.css.vendor %>']
				}]
			}
		},
	    copy: {
	    	generated: {
    			expand: true,
    			cwd: 'public/',
    			src: ['**/*.html'],
    			dest: 'generated/'
    		},
    		dist: {
				expand: true,
    			cwd: 'public/',
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

	grunt.registerTask('dev', [
    	'newer:babel',
    	'newer:cssmin:generated',
    	'copy:generated'
	]);

	// generate the built javascript for dev
	grunt.registerTask('generate', [
    	//'newer:jshint',
    	'babel',
    	'cssmin:generated',
    	'copy:generated'
	]);

	// build the distribution files
	grunt.registerTask('build', [
    	'generate',
    	'cssmin:dist',
    	'uglify',
    	'copy'
	]);

	// generate and watch
    grunt.registerTask('default', [
    	'generate',
    	'watch'
	]);
};
