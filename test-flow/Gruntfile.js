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
			generated: Object.assign({}, webpackConfig, {
				plugins: [],
				mode: 'development',
				entry: './public/js/app.js',
				output: {
					filename: 'all.js',
					path: path.resolve(__dirname, 'generated/js')
				},
				devtool: 'inline-source-map',
				watch: false // or true
			}),
			dist: Object.assign({}, webpackConfig, {
				mode: 'production',
				entry: './public/js/app.js',
				output: {
					filename: 'all.min.js',
					path: path.resolve(__dirname, 'dist/js')
				},
				devtool: 'inline-source-map'
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
		'webpack:generated',
		'copy:generated',
		'processhtml:generated'
	]);

	grunt.registerTask('build', [
		'clean',
		'webpack',
		'copy',
		'processhtml'
	]);
};
