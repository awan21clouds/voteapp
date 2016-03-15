var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/votingapp', function (err) {
    if (err) {
        return console.log('Cannot connect to database', err);
    }
    // of course your can have a better db connection error handler
    return console.log('Database connected.');
});

module.exports = mongoose;