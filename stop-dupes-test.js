// my attempt at stopping dupes. delete comma above if this is deleted
 TodoList.prototype.add = function(todo) {

  var isDupe = this.any(function(_todo){ return _todo.get('title') === todo.get('title');
  });

 return isDupe ? false : Backbone.Collection.prototype.add.call(this, todo); }

 // end attempt at stopping dupes
