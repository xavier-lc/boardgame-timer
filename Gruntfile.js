const browserifyConfig = env => ({
    files: { 'src/app.js': 'lib/app.jsx' },
    options: {
        transform: [
            ['loose-envify', { NODE_ENV: env, global: true }],
            'babelify'
        ]
    }
});

const targethtmlConfig = { files: { 'index.html': 'lib/index.html' } };

module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            options: {
                browserifyOptions: {
                    paths: ['./lib'],
                    extensions: ['.jsx']
                }
            },
            dev: browserifyConfig('dev'),
            prod: browserifyConfig('production')
        },
        uglify: {
            default: {
                files: {
                    'src/app.min.js': 'src/app.js'
                }
            }
        },
        sass: {
            default: {
                options: {
                    sourcemap: 'none',
                    style: 'expanded',
                    noCache: true,
                    trace: true
                },
                files: {
                    'css/style.css': 'css/style.scss'
                }
            }
        },
        cssmin: {
            options: {
                report: 'min',
                keepSpecialComments: 0
            },
            default: {
                files: {
                    'css/style.min.css': 'css/style.css'
                }
            }
        },
        targethtml: {
            // the config is the same, but the "target" value is needed on the index.html template
            dev: targethtmlConfig,
            prod: targethtmlConfig
        },
        htmlmin: {
            default: {
                options: {
                    collapseWhitespace: true,
                    minifyJS: true
                },
                files: {
                    'index.html': 'index.html'
                }
            }
        },
        watch: {
            default: {
                files: ['lib/**/*'],
                tasks: ['dev']
            },
            browserify: {
                files: ['lib/**/*'],
                tasks: ['browserify:dev']
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-targethtml');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['dev']);

    grunt.registerTask('dev', ['browserify:dev', 'sass', 'targethtml:dev']);

    grunt.registerTask('prod', [
        'browserify:prod',
        'uglify',
        'sass',
        'cssmin',
        'targethtml:prod',
        'htmlmin'
    ]);
};
