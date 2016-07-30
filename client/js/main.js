var React = require('react')
var ReactDOM = require('react-dom')
var ReactRouter = require('react-router');
var Router = ReactRouter.Router,
  Route = ReactRouter.Route,
  hashHistory = ReactRouter.hashHistory;
var Link = ReactRouter.Link;

var Play = require('./play.js');

var App = React.createClass({
  getInitialState: function() {
    return {
      result: {}
    }
  },

  render: function(){
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Play}/>
      </Router>
    )
  }
});

ReactDOM.render(<App/>, document.getElementById('app'))