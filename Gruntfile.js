module.exports = function (grunt) {
  grunt.initConfig({
    browserify: {
      default: {
        files: {
          'src/app.js': 'lib/app.jsx',
        },
        options: {
          transform: [['babelify', { presets: ['react', 'es2015'] }]],
        },
      },
    },
  });

  //grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask(
    'default',
    [
      'browserify',
    ]
  );
};
