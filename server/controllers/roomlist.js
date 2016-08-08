var mongoose = require('mongoose');
var RoomList= mongoose.model('RoomLists');
var Room= mongoose.model('Rooms');

module.exports = (function() {
  return {
    getRoomList: function (req, res) {
  //    console.log(res);

      RoomList.findOne({})
      .populate('_rooms')
      .populate({path:'_rooms', populate:{path: '_dealer'}})
      .populate({path:'_rooms', populate:{path: '_player'}})
      .exec(function(err, roomlist) {
        if(!roomlist) {  // if roomlist does not exist, create it and return it
          console.log('there is no roomlist. create plz');
          var newRoomList = new RoomList();
          console.log('roomList=', newRoomList);
          newRoomList.save().then(function() {
            console.log('Successfully saved', newRoomList);
            res.json({success:true, message: newRoomList});
          })
        } else {  // if exist, just return it
          console.log('found roomlist. reuse it', roomlist);
          res.json({success:true, message: roomlist});
        }
      })
      .catch(function(err) {
        res.json({success:false, message: err});
      });
    },
    addRoom:function(req, res) {
      RoomList.findOne().then(function(roomlist) {
        // first create a room

        var newroom = new Room({name: req.body.name, _dealer: req.body.dealerID});

   //     console.log('server addRoom', newroom);

        newroom.save().then(function(result) {
          // and push it to rooms
          roomlist._rooms.push(result._id);
          roomlist.save().then(function(result) {
            res.json({success:true, message: result});
          });
        });
      })
      .catch(function(err) {
        res.json({success:false, message: err});
      });
    },
    initCards: function(req, res) {
      console.log('Initializing cards at roomID', req.params.roomID);

      var newDeck = new Decks({_cards: []});
      var newcard;
      ['C', 'D', 'H', 'S'].forEach(function(item, index, array) {
        for(var j=2; j <= 10; j++) {
          newcard = new Cards({name: 'item'+j});
          newDeck._cards.push(newcard);
        }
      });
      newDeck.save()
        .then(function() {
          room._deck = newDeck;
        });
    }
  }
})();