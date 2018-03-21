module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			options: {
				esversion: 6
			},
			src: ["Gruntfile.js", "public/scripts/*.js"]
		},
		babel: {
			options: {
				sourceMap: true
			},
			generated: {
				files: [
					{
						expand: true, // enables most dyn. stuff
						cwd: "public/scripts/", // must be a string!
						src: ["*.js"],
						dest: "generated/scripts"
					}
				]
			}
		},
		copy: {
			generated: {
				files: [{
					expand: true,
					cwd: 'public/',
					src: ['**/*', '!scripts/*'],
					dest: 'generated/'
				}]
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask("default", [
		"generate"
	]);

	grunt.registerTask("generate", [
		"jshint",
		"babel",
		"copy"
	]);

};
