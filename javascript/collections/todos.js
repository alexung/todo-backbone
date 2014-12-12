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
  },
  isExistingTodoTitleOnOtherTodo: function(attrs) {
        return this.any(function(todo) {
          var titleMatch = todo.get('title').toLowerCase() === attrs.title.toLowerCase();
          var idMatch = attrs.id === todo.id;

          return titleMatch && !idMatch;
        });
      }
});

    // instance of the Collection
    app.todoList = new app.TodoList();
