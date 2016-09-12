module.exports = function (grunt) {
  grunt.initConfig({
    browserify: {
      default: {
        files: {
          'src/app.js': 'lib/app.jsx',
        },
        options: {
          transform: ['babelify'],
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
    sass: {
      default: {
        options: {
          sourcemap: 'none',
          style: 'expanded',
          noCache: true,
          trace: true,
        },
        files: {
          'css/style.css': 'css/style.scss',
        },
      },
    },
    cssmin: {
      options: {
        report: 'min',
        keepSpecialComments: 0,
      },
      default: {
        files: {
          'css/style.min.css': 'css/style.css',
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask(
    'default',
    [
      'browserify',
      'uglify',
      'sass',
      'cssmin',
    ]
  );
};
