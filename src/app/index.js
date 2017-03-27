var React    = require('react');
var ReactDOM = require('react-dom');

// Create component: can use ES6 or React way - going with the React way
var TodoComponent = React.createClass({
  render: function(){
    return(
      <h1>Hello, World!</h1>
    );
  }
});

// put component into html page
ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));
