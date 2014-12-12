'use strict';
var app = {};

   app.TodoList = Backbone.Collection.extend({
      model: app.Todo,
      localStorage: new Store("backbone-todo"),
      completed: function() {
        return this.filter(function(todo){
          return todo.get('completed');
        });
      },
      remaining: function(){
        return this.without.apply(this, this.completed());
      }
    });

    // my attempt at stopping dupes.
    //
   app.TodoList.prototype.add = function(todo) {

    var isDupe = this.any(function(_todo){ return _todo.get('title').toLowerCase() === todo.get('title').toLowerCase();
    });

   return isDupe ? alert("You've already added this item to the todo list!") : Backbone.Collection.prototype.add.call(this, todo);}

 // end attempt at stopping dupes


    // instance of the Collection
    app.todoList = new app.TodoList();
