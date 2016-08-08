/**
 * Created by 이성찬 on 2016-08-01.
 */
// This is the friend.js file located at /server/models/friend.js
// We want to create a file that has the schema for our friends and creates a model that we can then call upon in our controller
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create our friendSchema
var RoomListSchema = new mongoose.Schema({
  _rooms: [{type: Schema.Types.ObjectId, ref: 'Rooms'}],
  _deck: {type: Schema.Types.ObjectId, ref: 'Decks'}
}, {timestamps: true});
mongoose.model('RoomLists', RoomListSchema);