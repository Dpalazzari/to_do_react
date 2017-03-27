var React    = require('react');
var ReactDOM = require('react-dom');

// Create component: can use ES6 or React way - going with the React way
var TodoComponent = React.createClass({
  render: function(){
    return(
      <div>
        <p><strong>Cheese name:</strong> {this.props.cheese.name}</p>
        <p><strong>Cheese smell:</strong> {this.props.cheese.smell}</p>
        <p><strong>Cheese price:</strong> ${this.props.cheese.price}</p>
      </div>
    )
  }
})

var myCheese = {
  name: 'Camembert',
  smell: 'extreme pong',
  price: '3.50'
}

// put component into html page
ReactDOM.render(<TodoComponent mssg="I like Pizza" cheese={myCheese}/>, document.getElementById('todo-wrapper'));
