var React = require('react')
var ReactDOM = require('react-dom')
var ReactRouter = require('react-router');
var axios = require('axios');
var Router = ReactRouter.Router,
  Route = ReactRouter.Route,
  hashHistory = ReactRouter.hashHistory;
var Link = ReactRouter.Link;

module.exports = React.createClass({
  getInitialState: function() {
    return {
      title: ''
    }
  },

  // handleButtonClick(event) {
  //   event.preventDefault();
  //   console.log('search title = ', this.state.title);
  //
  //   var query = 'http://www.omdbapi.com/?t='+this.state.title+'&y=&plot=short&r=json';
  //   var myprops = this.props;
  //   axios.get(query)
  //     .then(function (response) {
  //       console.log('response from server = ', response.data);
  //       myprops.route.result(JSON.stringify(response.data)); // callback function
  //       hashHistory.push({pathname: 'result', state: {result: JSON.stringify(response.data)}});
  //     })
  // },
  //
  // handleTitleChange(event) {
  //   // this.setState({course: event.target.value });
  //   this.state.title = event.target.value;
  //   console.log('title = ', this.state.title);
  // },

  render: function (){
    return (
      <div> <h1> WOW </h1> </div>
    //   <div>
    //   <h1>Search Movie</h1>
    // <p>Title: <input onChange={this.handleTitleChange}/></p>
    // <p><button onClick={this.handleButtonClick}>Submit</button></p>
    // </div>
    )
  }
});