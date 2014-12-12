// Define a Todo Model
var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  },

  validate: function(attributes){
    if(attributes.title === undefined){
    return 'Remember a title for your todo.';
}
  },

  initialize: function(){
    console.log('This model has been initialized.');
    this.on('invalid', function(model, error){
      console.log(error);
    });
  }
});

var TodosCollection = Backbone.Collection.extend({
  model: Todo
});

var myTodo = new Todo({title:'Read the whole book', id: 2});
var myTodo2 = new Todo({title:'Something Else', id: 3})

var TodosCollection = new Backbone.Collection();

// TodosCollection.on("add", function(todo) {
//   console.log("I should " + todo.get("title") + ". Have I done it before? "  + (todo.get("completed") ? 'Yeah!': 'No.' ));
// });

// TodosCollection.add([
//   { title: 'get a job', completed: false },
//   { title: 'work at google', completed: false },
//   { title: 'start a company', completed: true }
// ]);

// Define an object with two counters
var TodoCounter = { counterA: 0, counterB: 0 };
// Mix in Backbone Events
_.extend(TodoCounter, Backbone.Events);

// Increment counterA, triggering an event
var incrA = function(){
  TodoCounter.counterA += 1;
  // This triggering will not
  // produce any effect on the counters
  TodoCounter.trigger('event');
};

// Increment counterB
var incrB = function(){
  TodoCounter.counterB += 1;
};

// Use once rather than having to explicitly unbind
// our event listener
TodoCounter.once('event', incrA);
TodoCounter.once('event', incrB);

// Trigger the event for the first time
TodoCounter.trigger('event');

// Check out output
console.log(TodoCounter.counterA === 1); // true
console.log(TodoCounter.counterB === 1); // true


var myTodo = new Todo();
myTodo.set('completed', true, {validate: true});


// Define a Todo View
var TodoView = Backbone.View.extend({

  tagName: 'li',

  todoTpl: _.template( $('#item-template').html() ),

  events: {
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close'
  },

  // Called when the view is first created
  initialize: function(){
    this.$el = $('#todo');
    //Later we'll look at this.listenTo(someCollection, 'all', this.render); but you can actually run this example right now by calling todoView.render();
  },

  render: function(){
    this.$el.html(this.todoTpl(this.model.attributes));
    // $el here is a reference to the JQuery element associated with the view,
    //todoTpl is a reference to an Underscore template
    //and model.attributes contains the attributes of the model.
    // altogether, the satement is replacing the HTML of
    // a DOM element with the result of instantiating a
    // template with the model's attributes
    this.input = this.$('.edit');
    return this;
  },

  edit: function(){
    // executed when a todo label is double clicked
  },

  close: function() {
    // executed when a todo loses focus
  },

  updateOnEnter: function(e){
    //executed on each keypress when in todo edit mode,
    // but we'll wait for enter to get in action
  }

});

// create a view for a todo
var todoView = new TodoView({model: myTodo});


var TodosView = Backbone.View.extend({
  tagName: 'ul',
  className: 'container',
  id: 'todos'
});

var todosView = new TodosView();
console.log(todosView.el);

// ________
// setElement
// We create two DOM elements representing buttons
// which could easily be containers or something else
var button1 = $('<button></button>');
var button2 = $('<button></button>');

// Define a new view
var View = Backbone.View.extend({
      events: {
        click: function(e) {
          console.log(view.el === e.target);
        }
      }
    });

// Create a new instance of the view, applying it
// to button1
var view = new View({el: button1});

// Apply the view to button2 using setElement
view.setElement(button2);

button1.trigger('click');
button2.trigger('click'); // returns true

// We can also provide raw markup to setElement
// as follows (just to demonstrate it can be done):
var view = new Backbone.View;
view.setElement('<p><a><b>test</b></a></p>');
console.log(view.$('a b').html());
// ==> test
