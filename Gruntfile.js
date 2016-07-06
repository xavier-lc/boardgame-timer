module.exports = function (grunt) {
  grunt.initConfig({
    babel: {
      options: {
        presets: ['react']
      },
      jsx: {
        files: [{
          expand: true,
          cwd: 'lib/components/jsx/',
          src: '*.jsx',
          dest: 'lib/components/js/',
          ext: '.js'
        }]
      }
    },
    browserify: {
      default: {
        files: {
          'src/app.js': 'lib/app.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask(
    'default',
    [
      'babel',
      'browserify'
    ]
  );
};