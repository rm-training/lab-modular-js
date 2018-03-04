module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	    babel: {
	        options: {
	            sourceMap: true
	        },
	        vendor: {
	        	files: [{
	                expand: true,
	                cwd: 'public/js/vendor',
	                src: ['**/*.js'],
	                dest: 'public/dist/js/vendor/'
	            }]
	        },
	        dist: {
	            files: [{
	                expand: true,
	                cwd: 'public/js/',
	                src: ['*.js'],
	                dest: 'public/dist/js/'
	            }]
	        }
	    }
	});

	grunt.registerTask('sayhi', 'Say hello.', function() {
		grunt.log.write('Hello!').ok();
	});

    grunt.loadNpmTasks('grunt-babel');

    grunt.registerTask("default", ["sayhi", "babel"]);
};
