var express = require('express');
var model_voter = require('../models/voter');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('voter');
});

router.get('/read', function(req, res, next) {
    console.log('hello from server side')
    model_voter.find(function (err, docs) {
        res.json(docs);
        //res.json({"data": docs});
    });
});

router.get('/read/:id', function(req, res){
    var id = req.params.id;
    console.log(id);
    model_voter.findOne({_id:id}, function(err, docs){
        res.json(docs);
    });
});

router.post('/save', function(req, res, next) {
    console.log('Save Post');
    console.log(req.body);
    var voter = new model_voter({
        email:req.body.email
    });
    voter.save(function (err, docs) {
        if (!err) {
            res.json(docs);
        }
    });
});

router.delete('/delete/:id', function(req, res){
    var id = req.params.id;
    console.log(id);
    model_voter.remove({ _id: id }, function(err) {
        if (!err) {
            res.json('deleted!');
        } else {
            res.json(err);
        }
    });

});

router.put('/update/:id', function(req, res){
    var id = req.params.id;
    model_voter.findByIdAndUpdate(id, { $set: {email:req.body.email}}, function (err, docs) {
        res.json(docs);
    });
});

module.exports = router;
