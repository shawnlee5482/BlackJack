/**
 * Created by 이성찬 on 2016-07-31.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var axios = require('axios');
var Router = ReactRouter.Router,
  Route = ReactRouter.Route,
  hashHistory = ReactRouter.hashHistory;
var Link = ReactRouter.Link;

module.exports = React.createClass({

  getInitialState: function() {
    console.log('initial state of play = ', this.props.location.state);
    var query = 'gameinfo/'+this.props.location.state.id;
    axios.get(query)
      .then(function (response) {
        console.log('response from server = ', response.data);
        return response.data;
      })

    // change the background

    return {id:this.props.location.state.id, name: this.props.location.state.name};
  },

  render: function (){
    return (
      <div>
      <h1>BlackJack Game</h1>
    </div>
    )
  }
});