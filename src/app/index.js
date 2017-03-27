var React    = require('react');
var ReactDOM = require('react-dom');

// Create component: can use ES6 or React way - going with the React way
var TodoComponent = React.createClass({

  getInitialState: function(){
    return {
      todos: ['wash up', 'eat pizza', 'practice React', "Kiss Stephanie"]
    }
  },
  render: function(){
    var todos = this.state.todos
    todos = todos.map(function(item, index){
      return(
        <li>{item}</li>
      )
    })
    return(
      <div id='todo-list'>
        <p>The busiest people have the most leisure...</p>
        <ul>
          {todos}
        </ul>
      </div>
    )
  } // render
})

// put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
