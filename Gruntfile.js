module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            dev: {
                files: {
                    'src/app.js': 'lib/app.jsx'
                },
                options: {
                    transform: [
                        ['loose-envify', { NODE_ENV: 'dev', global: true }],
                        'babelify'
                    ]
                }
            },
            prod: {
                files: {
                    'src/app.js': 'lib/app.jsx'
                },
                options: {
                    transform: [
                        [
                            'loose-envify',
                            { NODE_ENV: 'production', global: true }
                        ],
                        'babelify'
                    ]
                }
            }
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
            dev: {
                files: {
                    'index.html': 'lib/index.html'
                }
            },
            prod: {
                files: {
                    'index.html': 'lib/index.html'
                }
            }
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
