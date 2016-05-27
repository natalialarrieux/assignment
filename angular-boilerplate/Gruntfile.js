module.exports = function(grunt) {

    exec = require('child_process').exec;

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        watch: {
            templates: {
                files: 'assets/templates/**/*.html',
                tasks: ['ngtemplates', 'browserify']
            },
            js: {
                files: 'assets/js/modules/**/*.js',
                tasks: ['browserify']
            },
            sass: {
                files: 'assets/styles/sass/**/*.scss',
                tasks: ['sass', 'concat']
            }
        },

        ngtemplates: {
            build: {
                options: {
                    base: 'assets/templates',
                    prepend: '',
                    module: 'AngularBoilerplate'
                },
                src: ['assets/templates/**/*.html'],
                dest: 'assets/templates/templates.js'
            }
        },

        browserify: {
            'assets/js/build/main.js': ['assets/js/modules/main.js'],
            options: {
                debug: true
            }
        },
		
        sass: {
            build: {
              options: {
                style: 'expanded'
              },
              files: {
                'assets/styles/main.css': 'assets/styles/sass/styles.scss'
              }
            }
        },

        concat: {
            options: {
                separator: ''
            },
            lib: {
                src: [
                    'assets/bower_components/jquery/dist/jquery.js',
                    'assets/bower_components/angular/angular.js',
                    'assets/bower_components/bootstrap/dist/js/bootstrap.js',
					'assets/bower_components/angular-bootstrap/ui-bootstrap.js',
					'assets/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
					'assets/bower_components/angular/angular-mocks.js'
                ],
                dest: 'assets/js/build/lib.js'
            },
            css: {
                src: [
					'assets/bower_components/bootstrap/dist/css/bootstrap.css',
                    'assets/bower_components/bootstrap/dist/css/bootstrap-theme.css',
                    'assets/styles/assignmentStyle.css',
                    'assets/styles/main.css'
                ],
                dest: 'assets/styles/main.css'
            }
        },
        
        cssmin: {
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              'assets/styles/main.min.css': ['assets/styles/main.css']
            }
          }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                mangle: false
            },
            lib: {
				options: {
					mangle: false
				},
                files: {
                    'assets/js/build/lib.min.js': ['assets/js/build/lib.js']
                }
            },
            app: {
                options: {
                    mangle: false,
                    define: {
                        DEBUG: false
                    }
                },
                files: {
                    'assets/js/build/main.min.js': ['assets/js/build/main.js']
                }
            }
		},
		
        jasmine: {
            app: {
                src: [
                    'assets/js/build/main.js'
                ],
                options: {
                    specs: 'assets/js/test/*js',
                    vendor: [
                        'assets/js/build/lib.js'
                    ],
                    helpers: [
                        'assets/bower_components/angular-mocks/angular-mocks.js'
                    ],
                    keepRunner: true
                }
            }
        },

        eslint: {
          target: ['assets/js/modules/**.js']
        },

        clean: {
            deploy_temp: ['deploy_temp']
        },

        copy: {
            js: {
                files: [{
                    src: 'assets/js/build/*.min.js',
                    dest: 'deploy_temp/js/',
                    filter: 'isFile',
                    flatten: true,
                    expand: true,
                }]
            },
            css: {
                files: [{
                    src: 'assets/styles/*.css',
                    dest: 'deploy_temp/css/',
                    filter: 'isFile',
                    flatten: true,
                    expand: true,
                }]
            },
            images: {
                files: [{
                    src: 'assets/images/**',
                    dest: 'deploy_temp/images/',
                    filter: 'isFile',
                    flatten: true,
                    expand: true,
                }]
            },
            fonts: {
                files: [{
                    src: 'assets/fonts/**',
                    dest: 'deploy_temp/fonts/',
                    filter: 'isFile',
                    flatten: true,
                    expand: true,
                }]
            },
        },

        compress: {
            angularBoilerplate: {
                options: {
                    mode: 'zip',
                    archive: '../src/staticresources/angular-boilerplate.resource'
                },
                files: [{
                    expand: true,
                    cwd: 'deploy_temp',
                    src: '**',
                    dest: ''
                }, ]
            },
        },

        shell: {
            options: {
              stdout: true,
              stderr: true
            },
            deploy: {
              command: 'cd .. && ant -propertyfile build.properties pushAll'
            }
          }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-eslint');

    // Default task(s)
    grunt.registerTask('default', []);
    grunt.registerTask('build', ['ngtemplates', 'sass', 'browserify', 'concat', 'cssmin', 'uglify']); //'jasmine' fue quitado de build y build-full
    grunt.registerTask('build-full', ['ngtemplates', 'sass', 'browserify', 'concat', 'cssmin', 'uglify', 'clean:deploy_temp', 'copy:js', 'copy:css', 'copy:images', 'copy:fonts', 'compress:angularBoilerplate']);
    grunt.registerTask('test', ['browserify', 'jasmine']);
    grunt.registerTask('deploy', ['shell:deploy']);

};
