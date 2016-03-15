var mongoose = require('mongoose');
var db = require('./db');
var Schema = db.Schema;

// create a schema
var votingSchema = new Schema({
    voter:String,
    candidate:String
});

// the schema is useless so far
// we need to create a model using it
var voting = mongoose.model('Voting', votingSchema);

// make this available to our users in our Node applications
module.exports = voting;