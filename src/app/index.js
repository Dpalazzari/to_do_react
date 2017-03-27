var React    = require('react');
var ReactDOM = require('react-dom');

// Create component: can use ES6 or React way - going with the React way
var TodoComponent = React.createClass({

  getInitialState: function(){
    return {
      todos: ['wash up', 'eat pizza', 'practice React']
    }
  },

  render: function(){
    return(
      <div id='todo-list'>
        <p>The busiest people have the most leisure...</p>
        <ul>
          <li>{this.state.todos[0]}</li>
          <li>{this.state.todos[1]}</li>
          <li>{this.state.todos[2]}</li>
        </ul>
        <listComponent todos={this.state.todos}/>
      </div>
    )
  } // render
})

// put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
