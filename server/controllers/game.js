var redux = require('redux');
var store = require('../store/store');

console.log('store=', store);

	module.exports = (function() {
	return {
		getRoomList: function (req, res) {
			console.log('getRoomList');
			res.json('getRoomList');
		},
		createRoom: function (req, res) {
			res.json('createRoom');
		},
		joinRoom: function (req, res) {
			res.json('joinRoom id= ' + req.params.id);
		}
	}
})();