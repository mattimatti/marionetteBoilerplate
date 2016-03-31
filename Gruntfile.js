module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            mobileJS: {
                options: {
                    baseUrl: "public/js/app",
                    wrap: true,
                    // Don't use almond if your project needs to load modules dynamically
                    name: "../libs/almond/almond",
                    preserveLicenseComments: false,
                    //optimize: "uglify",
                    optimize: "none",
                    optimizeCss: "standard",
                    mainConfigFile: "public/js/app/config/config.js",
                    include: ["init/MobileInit"],
                    out: "public/js/app/init/MobileInit.min.js",

                    /*********
                     * https://github.com/SlexAxton/require-handlebars-plugin
                     */
                    pragmasOnSave: {
                        //removes Handlebars.Parser code (used to compile template strings) set
                        //it to `false` if you need to parse template strings even after build
                        excludeHbsParser: true,
                        // kills the entire plugin set once it's built.
                        excludeHbs: true,
                        // removes i18n precompiler, handlebars and json2
                        excludeAfterBuild: true
                    },

                    locale: "en_us",

                    // options object which is passed to Handlebars compiler
                    hbs: {
                        templateExtension: "html",
                        helperDirectory: "templates/helpers/",
                        compileOptions: {}
                    }
                }
            },
            mobileCSS: {
                options: {
                    optimizeCss: "standard",
                    cssIn: "./public/css/mobile.css",
                    out: "./public/css/mobile.min.css"
                }
            },
            desktopJS: {
                options: {
                    baseUrl: "public/js/app",
                    wrap: true,
                    // Cannot use almond since it does not currently appear to support requireJS's config-map
                    name: "../libs/almond/almond",
                    preserveLicenseComments: false,
                    optimize: "uglify",
                    mainConfigFile: "public/js/app/config/config.js",
                    include: ["init/DesktopInit"],
                    out: "public/js/app/init/DesktopInit.min.js"
                }
            },
            desktopCSS: {
                options: {
                    optimizeCss: "standard",
                    cssIn: "./public/css/desktop.css",
                    out: "./public/css/desktop.min.css"
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'public/js/app/**/*.js', '!public/js/app/**/*min.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: false,
                    module: true,
                    document: true
                }
            }
        },
        watch: {
            scripts: {
                files: ['Gruntfile.js', 'public/js/init.js', 'public/js/app/**/*.js', '!public/js/app/**/*min.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false
                }
            },
            templates: {
                files: ['public/js/app/**/*.html'],
                tasks: [],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['public/css/**/*.css', '!public/css/**/*min.css'],
                tasks: ['css'],
                options: {
                    spawn: false
                }
            },
            less: {
                files: ['public/less/**/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false
                }
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: ['public/**/*']
            }
        },
        bump: {
            options: {
                files: ['package.json'],
                updateConfigs: ['pkg', 'component'],
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['-a'],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: true,
                pushTo: 'origin',
                globalReplace: true
            }
        },
        less: {
            commonstyles: {
                options: {
                    paths: ["public/less"]
                },
                files: {
                    "public/css/commonstyles.css": "public/less/commonstyles.less"
                }
            },
            mobile: {
                options: {
                    paths: ["public/less"]
                },
                files: {
                    "public/css/mobilestyles.css": "public/less/mobilestyles.less"
                }
            },
            desktop: {
                options: {
                    paths: ["public/less"]
                },
                files: {
                    "public/css/desktopstyles.css": "public/less/desktopstyles.less"
                }
            }
        },
        bowerRequirejs: {
            target: {
                rjsConfig: 'public/js/app/config/config.js'
            }
        }

    });

    grunt.registerTask('server', 'Start a custom web server.', function() {
        grunt.log.writeln('Starting web server on port 8001. Please go to http://localhost:8001 to view your app');
        require('./server/server.js').listen(8001);
    });


    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('css', ['requirejs:desktopCSS', 'requirejs:mobileCSS']);
    grunt.registerTask('js', ['requirejs:desktopJS', 'requirejs:mobileJS']);
    grunt.registerTask('build', ['js', 'css']);
    grunt.registerTask('default', ['test', 'build']);
};