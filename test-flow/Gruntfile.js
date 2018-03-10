module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	const config = {
		files: {
			js: [
				'public/js/testfile.js',
				'public/js/testfile2.js'
			]
		},
		server: {
			generated: {
				base: 'generated/',
				port: 8312
			},
			dist: {
				base: 'dist/',
				port: 8313
			}
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
				files: ['<%= files.js %>', 'public/**/*.html'],
				tasks: ['generate'],
				options: {
					livereload: 35729,
					spawn: false, // faster when turned off
				},
			},
		},
		processhtml: {
		    build: {
		    	files: {
		    		'dist/index.html': ['public/index.html']
		    	}
		    },
		},
		requirejs: {
			compile: {
				options: {
					// appDir: "generated/",
					baseUrl: "generated/js",

					// to uglify or not
					optimize: 'uglify2', // uglify | uglify2

					// override our configs
					// r.js doesn't support fallbacks
					paths: {
						jquery: 'jquery'
					},

					// location of our configration
					mainConfigFile:'generated/js/app.js',

					// which modules will be "optimized"?
					// we can set 'name' if we aren't going to
					// name: 'app',
					// and it will bundle it all into ^ app
					// separate out bundles of modules like here
					modules:[
						{
							name: 'vendor.min',
							create: true,
							include: ['jquery']
						},
						{
							name: 'app.min',
							create: true,
							include: 'app',
							exclude: ['vendor.min'],
						}
					],
					generateSourceMaps: true,
					logLevel: 0,

					// add IIFE wrappers
					// wrap: true


					// for single file output
					//name: 'app',
					//out: "dist/js/optimized.js",
					// include: [ "app.js" ],

					// for multiple file output
					dir: "dist/js",

					// clean up files that are later bundled
					removeCombined: true,
				}
			}
		}
	};

	grunt.loadTasks('tasks');

	grunt.initConfig(config);

	grunt.registerTask('default', [
		'generate',
		'server:generated',
		'watch'
	]);

	grunt.registerTask('generate', [
		'jshint',
		'babel',
		'copy:generated'
	]);

	grunt.registerTask('build', [
		'clean',
		'jshint',
		'babel',
		'copy',
		'requirejs',
		'processhtml'
	]);
};
