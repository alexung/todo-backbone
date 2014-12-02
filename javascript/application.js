var Router = Backbone.Router.extend({
    routes: {
      '': 'home'
    }
});

var router = new Router();
router.on('route:home', function(){
  console.log('we have loaded the homepage')
});

Backbone.history.start();

var Task = Backbone.Model.extend({
    defaults: {
        name: "Generic Task",
        description: "Generic Task Description",
        finished: "No"
    }
})
