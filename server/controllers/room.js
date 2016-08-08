var mongoose = require('mongoose');
var Rooms = mongoose.model('Rooms');
var Users = mongoose.model('Users');
var Cards = mongoose.model('Cards');
var DeckController = require('./deck.js');

const number_player = 4;
const number_cards = 4;

module.exports = (function() {
  return {
    join: function (req, res) {
      console.log('Join user id, roomID', req.body.id, req.body.roomID);

      // find the room first with id
      Rooms.findOne({_id: req.body.roomID})
      .then(function(room) {
        if(room._player.length >= number_player) throw("The room is fully occupied")
        room._player.push(req.body.id);
        room.save().then(function(result) {
          res.json({success:true, message: result});
        })
      })
      .catch(function(err) {
        res.json({success:false, message:err});
      });
    }
  }
})();


