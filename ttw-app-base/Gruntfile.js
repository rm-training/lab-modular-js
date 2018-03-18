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
    exec: {
      parcel_server: 'npx parcel public/index.html --out-dir generated',
      parcel_watch: 'npx parcel watch public/index.html --out-dir generated',
      parcel_build: 'npx parcel build public/index.html --out-dir dist --public-url ./ --no-cache --out-file index.html'
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  //grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-clean");
  //grunt.loadNpmTasks("grunt-contrib-watch");
  //grunt.loadNpmTasks("grunt-contrib-uglify");
  //grunt.loadNpmTasks("grunt-processhtml");
  grunt.loadNpmTasks("grunt-exec");


  grunt.registerTask("generate", [
    "clean:generated",
    "jshint",
    //"babel",
    "copy:generated",
    "exec:parcel_watch"
  ]);
  grunt.registerTask("working", [
    "generate",
    "exec:parcel_watch"
  ]);
  grunt.registerTask("dist", [
    "generate",
    "clean:dist",
    "copy:dist",
    "exec:parcel_build"
    //"processhtml:dist",
    //"uglify:dist"
  ]);
grunt.registerTask("default", ["generate"]);
};
