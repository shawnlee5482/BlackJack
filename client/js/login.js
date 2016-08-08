/**
 * Created by 이성찬 on 2016-08-07.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var axios = require('axios');
var Router = ReactRouter.Router,
  Route = ReactRouter.Route,
  hashHistory = ReactRouter.hashHistory;
var Link = ReactRouter.Link;


// Login component
// Show user name input form and get name
// and send ajax to server for login
module.exports = React.createClass({

  getInitialState: function() {
    return {name: null};
  },

  handleNameChange(event) {
    this.state.name = event.target.value;
  },

  handleButtonClick(event) {
    event.preventDefault();
    var query = {name: this.state.name};
    axios.post('user', query)
      .then(function (response) {
        console.log('response from server = ', response.data);
        // set cookie
        $.removeCookie('currentUserID');
        $.cookie('currentUserID', response.data.message._id);
        console.log('current cookie = ', $.cookie('currentUserID'));
        hashHistory.push({pathname: 'rooms'});
      })
  },

  render: function (){
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1>BlackJack</h1>
          <p>Online BlackJack game developed by using React.JS</p>
        </div>
        <form role="form">
          <div className="form-group">
            <label>Enter your name to login</label>
            <label>Name:</label> <input className="form-control" onChange={this.handleNameChange}/>
          </div>
          <button className="btn btn-primary" onClick={this.handleButtonClick}>Submit</button>
        </form>
      </div>
    )
  }
});