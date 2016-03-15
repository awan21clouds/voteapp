var mongoose = require('mongoose');
var db = require('./db');
var Schema = db.Schema;

// create a schema
var candidateSchema = new Schema({
    name:String
});

// the schema is useless so far
// we need to create a model using it
var candidate = mongoose.model('Candidate', candidateSchema);

// make this available to our users in our Node applications
module.exports = candidate;