define(['App', 'backbone', 'marionette', 'views/WelcomeView', 'views/AboutView', 'views/DesktopHeaderView'],
    function (App, Backbone, Marionette, WelcomeView, AboutView, DesktopHeaderView) {
    return Backbone.Marionette.Controller.extend({
        
        initialize:function (options) {
            App.headerRegion.show(new DesktopHeaderView());
        },

        //gets mapped to in AppRouter's appRoutes
        index:function () {
            App.mainRegion.show(new WelcomeView());
        },

        //gets mapped to in AppRouter's appRoutes
        about:function () {
            App.mainRegion.show(new AboutView());
        }
        
    });
});