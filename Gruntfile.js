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
        }
      },
    },
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask(
    'default',
    [
      'browserify',
      'sass',
      //'uglify',
    ]
  );
};
