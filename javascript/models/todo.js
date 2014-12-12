'use strict';
var app = {};

 app.Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  },
  toggle: function(){
    this.save({ completed: !this.get('completed')});
  },
  validate: function(attrs, options) {
    if (this.collection.isExistingTodoTitleOnOtherTodo(attrs)) {
      return "You've already added this item to the todo list!";
    }
  }
});
