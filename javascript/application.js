'use strict';
var app = {};

  app.router = new app.Router();
    Backbone.history.start();
    app.appView = new app.AppView();
