const path = require('path');
module.exports = function(grunt) {
	grunt.initConfig({
		webpack: {
			options: {
				stats:
					!process.env.NODE_ENV ||
					process.env.NODE_ENV === "development"
			},
			generated: Object.assign(
				{},
				{
					mode: "development",
					entry: "./public/js/app.js",
					output: {
						filename: "app.js",
						path: path.resolve(__dirname, "generated/js")
					},
					devtool: "inline-source-map",
					watch: false
				}
			)
		},
		copy: {
		  generated: {
		     files: [{
		        expand: true,
		        cwd: 'public/',
		        src: ['**/*', '!js/*'],
		        dest: 'generated/'
		     }]
		  }
		}
	});

	grunt.loadNpmTasks('grunt-webpack');
	grunt.loadNpmTasks('grunt-contrib-copy');


	grunt.registerTask("default", ['copy', 'webpack']);
};
