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
    uglify: {
      default: {
        files: {
          'src/app.min.js': 'src/app.js',
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask(
    'default',
    [
      'browserify',
      //'uglify',
    ]
  );
};
