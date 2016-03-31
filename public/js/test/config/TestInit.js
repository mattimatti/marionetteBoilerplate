require(["jquery", "backbone", "marionette", "jasmine-html", "bootstrap"],
    function ($, Backbone, Marionette, jasmine) {
        specs = [];
        specs.push('../test/specs/spec');
        $(function () {
            require(specs, function () {
                jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
                jasmine.getEnv().execute();
            });
        });
    }

);