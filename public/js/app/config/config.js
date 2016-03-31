require.config({
    baseUrl: "./js/app",
    paths: {
        jquery: "../libs/jquery/jquery",
        underscore: "../libs/underscore-amd/underscore",
        backbone: "../libs/backbone/backbone",
        handlebars: "../libs/handlebars/handlebars",
        i18nprecompile: "../libs/require-handlebars-plugin/hbs/i18nprecompile",
        bootstrap: "../libs/bootstrap/dist/js/bootstrap",
        text: "../libs/text/text",
        jasminejquery: "../libs/plugins/jasmine-jquery",
        "backbone-amd": "../libs/backbone-amd/backbone",
        "backbone.babysitter": "../libs/backbone.babysitter/lib/backbone.babysitter",
        marionette: "../libs/backbone.marionette/lib/backbone.marionette",
        "backbone.wreqr": "../libs/backbone.wreqr/lib/backbone.wreqr",
        gsap: "../libs/gsap/src/uncompressed/TweenMax",
        modernizr: "../libs/modernizr/modernizr",
        hbs: "../libs/require-handlebars-plugin/hbs",
        requirejs: "../libs/requirejs/require",
        "requirejs-text": "../libs/requirejs-text/text",
        "underscore-amd": "../libs/underscore-amd/underscore",
        "backbone.marionette": "../libs/backbone.marionette/lib/core/backbone.marionette",
        "require-handlebars-plugin": "../libs/require-handlebars-plugin/hbs",
        almond: "../libs/almond/almond",
        "jasmine-core": "../libs/jasmine-core/lib/jasmine-core/jasmine",
        "jasmine-jquery": "../libs/jasmine-jquery/lib/jasmine-jquery",
        json2: "../libs/require-handlebars-plugin/hbs/json2"
    },
    shim: {
        bootstrap: [
            "jquery"
        ],
        backbone: {
            deps: [
                "underscore",
                "jquery"
            ],
            exports: "Backbone"
        },
        marionette: {
            deps: [
                "underscore",
                "backbone",
                "jquery"
            ],
            exports: "Marionette"
        },
        jasmine: {
            exports: "jasmine"
        },
        "jasmine-html": {
            deps: [
                "jasmine"
            ],
            exports: "jasmine"
        }
    },
    hbs: {
        templateExtension: "html",
        helperDirectory: "templates/helpers/",
        i18nDirectory: "templates/i18n/",
        compileOptions: {

        }
    },
    packages: [

    ]
});