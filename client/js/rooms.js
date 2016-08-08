var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var axios = require('axios');
var Router = ReactRouter.Router,
  Route = ReactRouter.Route,
  hashHistory = ReactRouter.hashHistory;
var Link = ReactRouter.Link;
var Table = require('reactable').Table,
  unsafe = Reactable.unsafe;

module.exports = React.createClass({
  getSimpleTable: function(rooms) {  // array of room
    var filteredRooms = [];
    for(var i = 0; i < rooms.length; i++) {
      var name = rooms[i].name;
      var dealerName;
      if(rooms[i]._dealer) dealerName = rooms[i]._dealer.name;
      else dealerName = null;
      filteredRooms.push({name: name, dealer: dealerName, count: rooms[i]._player.length});
      console.log({name: name, dealer: dealerName, count: rooms[i]._player.length});
    }
    console.log('collected rooms');

    return filteredRooms;
  },

  getInitialState: function() {
    var query = 'http://localhost:3000/roomlist';
    var myThis = this;
    axios.get(query).then(function (response) {
      console.log('rooms getInitialState response from server = ', response.data.message);
      myThis.setState(response.data.message);
      return response.data.message;
    })
    .catch(function(err) {
      return null;
    });
    return null;
  },

  createRoom: function() {
    console.log('createRoom is called');
    var query = 'http://localhost:3000/addroom';
    var dealerID = $.cookie('currentUserID');
    if(!dealerID) {
      console.log('current user info = ', dealerID);
      // go to login page
    }
    console.log('dealer name, room name = ', dealerID, this.state.roomName);

    var param = {name: this.state.roomName, dealerID: dealerID};
    var myThis = this;
    axios.post(query, param).then(function (response) {
  //    myThis.setState(myThis.getSimpleTable(response));
        myThis.getInitialState();
    });
  },

  roomNameChange: function(event) {
    this.state.roomName = event.target.value;
  },

  render: function (){
    if(!this.state) {
      console.log('rooms render this.state is null just return empty div');
      return(<div/>);
    } //if there is nothing to display just return empty div

    var rooms = this.getSimpleTable(this.state._rooms);
    console.log('rooms =  ', rooms);
    // make count column and assign link
    for(var i = 0; i < rooms.length; i++) {
      var room = rooms[i];
      if(room.count < 4) {
        room.count = <Link to={'join/'+ this.state._rooms[i]._id}>{room.count}</Link>;
      } else {
        room.count = "Full";
      }
    }

    return (
      <div className="container-fluid">
        < Table className = "table"
          //rooms = {this.state.rooms} see above
          data = {rooms}
        />
        <form role="form">
          <div className="form-group">
            <label>Create a Room</label>
            <input onChange={this.roomNameChange} className="form-control" type="text"/>
          </div>

          <button onClick={this.createRoom} className="btn btn-info">Create</button>
        </form>

      </div>
    )
  }
});