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
    processhtml: {
      dist: {
        files: {
          'dist/index.html': ['generated/index.html']
        }
      },
    },
    requirejs: {
      dist: {
        options: {
          optimize: 'uglify',
          baseUrl: 'generated/scripts',
          paths: {
            requireLib: '../vendor/require'
          },
          mainConfigFile: 'generated/scripts/main.js',
          name: 'main',
          out: 'dist/scripts/optimized.min.js',
          generateSourceMaps: true,
          includes: ['requireLib']
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-processhtml");
  grunt.loadNpmTasks("grunt-contrib-requirejs");

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
    "requirejs:dist"
  ]);

  grunt.registerTask("default", ["generate"]);

};
