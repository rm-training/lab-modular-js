const webpackConfig = require('./webpack.config');
const path = require('path');

module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	const config = {
		server: {
			base: 'generated/',
			port: 8312
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
					'generated/js/bundle.js': 'generated/js/bundle.js'
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
				files: ['public/js/**/*.js', 'public/**/*.html'],
				tasks: ['generate'],
				options: {
					livereload: 35729,
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
						'generated/js/all.js',
					]
				}
			},
		},
		processhtml: {
		    generated: {
		    	files: {
		    		'generated/index.html': ['public/index.html']
		    	}
		    },
		    dist: {
		    	files: {
		    		'dist/index.html': ['generated/index.html']
		    	}
		    },
		},
		webpack: {
			options: {
				stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
			},
			generated: Object.assign({}, {
				mode: 'development',
				entry: './public/js/app.js',
				output: {
					filename: 'all.js',
					path: path.resolve(__dirname, 'generated/js')
				},
				devtool: 'inline-source-map',
				watch: false // or true
			})
	    }
	};

	grunt.loadTasks('tasks');

	grunt.initConfig(config);

	grunt.registerTask('default', [
		'generate',
		'server',
		'watch'
	]);

	grunt.registerTask('generate', [
		'jshint',
		'webpack',
		'babel',
		'copy:generated',
		'processhtml:generated'
	]);

	grunt.registerTask('build', [
		'clean',
		'babel',
		'copy',
		'uglify',
		'processhtml:dist'
	]);
};
