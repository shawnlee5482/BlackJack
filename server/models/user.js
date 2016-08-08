/**
 * Created by 이성찬 on 2016-08-01.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create our friendSchema
var UserSchema = new mongoose.Schema({
  name: {type: String, required:true},
  _cards: [{type: Schema.Types.ObjectId, ref: 'Cards'}]
}, {timestamps: true});

mongoose.model('Users', UserSchema);