module.exports = function(grunt) {

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
	                dest: 'dist/js/vendor/'
	            }]
	        },
	        dist: {
	            files: [{
	                expand: true,
	                cwd: 'public/js/',
	                src: ['*.js'],
	                dest: 'dist/js/'
	            }]
	        }
	    },
	    copy: {
	    	html: {
    			expand: true,
    			cwd: 'public/',
    			src: ['**/*.html'],
    			dest: 'dist/'
    		},
	    }
	});

	grunt.registerTask('sayhi', 'Say hello.', function() {
		grunt.log.write('Hello!').ok();
	});

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['sayhi', 'jshint', 'babel', 'copy:html']);
};
