var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var axios = require('axios');
var Router = ReactRouter.Router,
  Route = ReactRouter.Route,
  hashHistory = ReactRouter.hashHistory;
var Link = ReactRouter.Link;

// Join component
// Initstate: room id to join
// Show user name input form and get name
// and send ajax to server for login
module.exports = React.createClass({

  getInitialState: function() {
    console.log('join.js initial state = ', this.props.routeParams.id); // room id
    return {id:this.props.routeParams.id};
  },

  handleNameChange(event) {
    this.state.name = event.target.value;
  },

  handleButtonClick(event) {
    event.preventDefault();
    console.log('input name = ', this.state.name);
    var query = {name: this.state.name, id: this.state.id};
    console.log('query=', query);
    axios.post('join', query)
      .then(function (response) {
        console.log('response from server = ', response.data);
        hashHistory.push({pathname: 'play', state: {id: response.data.id, name:response.data.name}});
      })
  },

  render: function (){
    return (
      <div>
        <h1>Enter your name to join the room</h1>
        <p>Name: <input onChange={this.handleNameChange}/></p>
        <p><button onClick={this.handleButtonClick}>Submit</button></p>
      </div>
    )
  }
});