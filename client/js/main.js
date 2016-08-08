var React = require('react')
var ReactDOM = require('react-dom')
var ReactRouter = require('react-router');
var Router = ReactRouter.Router,
  Route = ReactRouter.Route,
  hashHistory = ReactRouter.hashHistory;
var Link = ReactRouter.Link;


var Rooms = require('./rooms.js');
var Join = require('./join.js');
var Play = require('./play.js');
var Login = require('./login.js');

var Main = React.createClass({
  getInitialState: function() {
    return null;
  }
  ,
  render: function(){
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Login}> </Route>
        <Route path='/rooms' component={Rooms}> </Route>
        <Route path='/join/:id' component={Join}> </Route>
        <Route path='/play' component={Play}></Route>
      </Router>
    )
  }
});

ReactDOM.render(<Main/>, document.getElementById('main'));