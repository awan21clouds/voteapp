var mongoose = require('mongoose');
var db = require('./db');
var Schema = db.Schema;

// create a schema
var voterSchema = new Schema({
    email:String
});

// the schema is useless so far
// we need to create a model using it
var voter = mongoose.model('Voter', voterSchema);

// make this available to our users in our Node applications
module.exports = voter;