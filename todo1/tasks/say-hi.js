module.exports = function(grunt) {
    grunt.registerTask('say-hi', 'Say hello to the console', function() {
        grunt.log.write('Hello!').ok();
    });
};
