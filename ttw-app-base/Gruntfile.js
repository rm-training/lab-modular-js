module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        esversion: 6
      },
      src: [
        'Gruntfile.js',
        'public/scripts/*.js'
      ]
    },
    babel: {
      options: {
        sourceMaps: 'inline'
      },
      generated: {
        files: [{
          expand: true, // enables most dyn. stuff
          cwd: 'public/scripts/', // must be a string!
          src: ['*.js'],
          dest: 'generated/scripts'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-babel');

  grunt.registerTask('default', ['jshint']);
};
