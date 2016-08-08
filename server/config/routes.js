
  module.exports = function(app) {
  	// First, at the top of your routes.js file you'll have to require the controller
    var user = require('./../controllers/user.js');
    var RoomList = require('./../controllers/roomlist.js');
    var Room = require('./../controllers/room.js');
    //req.body.name: user's name
    app.post('/user', function(req, res) {
      console.log('/user router is running')
      user.addUser(req, res);
    });

    // no param
    app.get('/roomlist', function(req, res) {
      RoomList.getRoomList(req, res);
    });

    // req.body.name: name of the room
    // req.body.dealerID: dealer's id
    app.post('/addroom', function(req, res) {
      RoomList.addRoom(req, res);
    });

    // req.body.roomID: room id you want to enter
    // req.body.id: user id
    app.post('/join', function(req, res) {
      Room.join(req, res);
    });

    app.get('/initcards/:roomID', function(req, res) {
      Room.initCards(req, res);
    });
};