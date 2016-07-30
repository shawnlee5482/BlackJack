
  module.exports = function(app) {
  	// First, at the top of your routes.js file you'll have to require the controller
    var game = require('./../controllers/game.js');

    // Topics
    app.get('/roomlist', function(req, res) {
      console.log('getRoomList in router');
      game.getRoomList(req, res);
    });

    app.post('/create', function(req, res) {
      game.createRoom(req, res);
    });

    app.get('/join/:id', function(req, res) {
      game.joinRoom(req, res);
    });
};