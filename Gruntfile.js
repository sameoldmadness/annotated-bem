module.exports = function(grunt) {
  grunt.initConfig({
    explainjs: {
      dist: {
        options: { showFilename: true },
        files: [
          {
            src: ['src/i-bem__dom.js'],
            dest: 'dist/i-bem__dom.html'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-explainjs');
  grunt.registerTask('default', ['explainjs']);
};