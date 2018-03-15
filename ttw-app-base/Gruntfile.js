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
        sourceMaps: "inline"
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
        files: [
          {
            expand: true,
            cwd: "public/",
            src: ["**/*", "!scripts/*"],
            dest: "generated/"
          }
        ]
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: "generated/",
            src: ["**/*", "!scripts/*", "!vendor/**/*.js"],
            dest: "dist/"
          }
        ]
      }
    },
    clean: {
      generated: ["generated"],
      dist: ["dist"]
    },
    watch: {
      files: ["public/scripts/*.js", "public/*.html"],
      tasks: ["generate"],
      options: {
        livereload: 35729,
        spawn: false // faster but error-prone
      }
    },
    uglify: {
      dist: {
        options: {
          sourceMap: {
            includeSources: true
          },
          mangle: true
        },
        files: {
          'dist/scripts/all.min.js': [
            // won't cut it because of script dependencies & ordering
            // generated/scripts/**/*.js'
            'generated/scripts/logger.js',
            'generated/scripts/app.js'
          ],
          'dist/vendor/all.min.js': [
            // bootstrap wants jquery - I don't
            // 'generated/vendor/**/*.js'
            'generated/vendor/*.js'
          ]
        }
      }
    },
    processhtml: {
      dist: {
        files: {
          'dist/index.html': ['generated/index.html']
        }
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-processhtml");

  grunt.registerTask("generate", [
    "clean:generated",
    "jshint",
    "babel",
    "copy:generated"
  ]);
  grunt.registerTask("working", ["generate", "watch"]);
  grunt.registerTask("dist", [
    "generate",
    "clean:dist",
    "copy:dist",
    "processhtml:dist",
    "uglify:dist"
  ]);
grunt.registerTask("default", ["generate"]);
};
