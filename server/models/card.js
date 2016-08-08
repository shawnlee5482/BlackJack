/**
 * Created by 이성찬 on 2016-08-01.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create our friendSchema
var CardSchema = new mongoose.Schema({
  name: {type: String, required: true}
}, {timestamps: true});
mongoose.model('Cards', CardSchema);