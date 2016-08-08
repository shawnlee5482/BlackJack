/**
 * Created by 이성찬 on 2016-08-01.
 */
// This is the friend.js file located at /server/models/friend.js
// We want to create a file that has the schema for our friends and creates a model that we can then call upon in our controller
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create our friendSchema
var RoomSchema = new mongoose.Schema({
  name: {type: String, required:true} ,
  _dealer: {type: Schema.Types.ObjectId, ref: 'Users'},
  _player: [{type: Schema.Types.ObjectId, ref: 'Users'}],
  _deck: {type: Schema.Types.ObjectId, ref: 'Decks'}
}, {timestamps: true});
mongoose.model('Rooms', RoomSchema);