module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	    babel: {
	        options: {
	            sourceMap: true
	        },
	        dist: {
	        	// concat to one file
	            // files: [{
	            //     "src": ["public/js/**/*.js"],
	            //     "dest": ["public/dist/all.js"],
	            // }],
            	// dynamic mapping to get it to expand
	            files: [{
	                expand: true,
	                cwd: 'public/js/',
	                src: ['**/*.js'],
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
