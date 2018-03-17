const path = require('path');

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        esversion: 6
      },
      src: ["Gruntfile.js", "public/scripts/*.js"]
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
          'dist/scripts/bundle.min.js': ['generated/scripts/**/*.js']
        }
      }
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
      generated: {
        mode: 'development',
        entry: './public/scripts/app.js',
        output: {
          filename: 'bundle.js',
          path: path.resolve(__dirname, 'generated/scripts')
        },
        devtool: 'inline-source-map',
        module: { // config for all modules
          rules: [{
            test: /\.js$/, // which files do I affect
            loader: 'babel-loader', // and which loader do I put them through
            query: { // params to my loader
              presets: ['env']
            }
          }]
        }
        //watch: false // or true
     }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-processhtml");
  grunt.loadNpmTasks("grunt-webpack");

  grunt.registerTask("generate", [
    "clean:generated",
    "jshint",
    //"babel",
    "copy:generated",
    "processhtml:generated",
    "webpack:generated"
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
