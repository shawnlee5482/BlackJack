/**
 * Created by 이성찬 on 2016-08-03.
 */
var mongoose = require('mongoose');
var Rooms = mongoose.model('Rooms');
var Users = mongoose.model('Users');
var Cards = mongoose.model('Cards');
var Decks = mongoose.model('Decks');

module.exports = (function() {
  return {

    shuffleCards: function (deck) {

    },
    takeCards: function(deck, num) {
    },
    distribute: function(deck, user, cards) {
/*      Users.findOne({_id: room._dealer._id})
        .populate('_cards')
        .exec()
        .then(function (user) {
          var newcard = new Cards({name: 'C2'});
          newcard.save()
            .then(function (result) {
              user._cards.push(newcard._id);
              user.save()
                .then(function (result) {
                  res.json({succes: true, message: result});
                });
            })
        });
*/
    }
  }
})();
