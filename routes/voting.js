var express = require('express');
var model_voting = require('../models/voting');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//    res.render('voting');
//});

router.get('/:id', function(req, res, next) {
    console.log(req.params.id);
    res.render('voting', { voter: req.params.id });
});

router.post('/save', function(req, res, next) {
    console.log('Save Post');
    console.log(req.body);
    var voter = new model_voting({
        voter:req.body.voter,
        candidate:req.body.candidate
    });

    voter.save(function (err) {
        if (!err) {
            res.json('success');
        }
    });
});


module.exports = router;
