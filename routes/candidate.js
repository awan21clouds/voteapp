var express = require('express');
var model_candidate = require('../models/candidate');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('candidate');
});

router.get('/read', function(req, res, next) {
    console.log('hello from server side')
    model_candidate.find(function (err, docs) {
        res.json(docs);
        //res.json({"data": docs});
    });
});

router.get('/read/:id', function(req, res){
    var id = req.params.id;
    console.log(id);
    model_candidate.findOne({_id:id}, function(err, docs){
        res.json(docs);
    });
});

router.post('/save', function(req, res, next) {
    console.log('Save Post');
    console.log(req.body);
    var candidat = new model_candidate({
        name:req.body.name
    });
    candidat.save(function (err) {
        if (!err) {
            res.json('created');
        } else {
            res.json(err);
        }
    });
});

router.delete('/delete/:id', function(req, res){
    var id = req.params.id;
    console.log(id);
    model_candidate.remove({ _id: id }, function(err) {
        if (!err) {
            res.json('deleted!');
        } else {
            res.json(err);
        }
    });

});

router.put('/update/:id', function(req, res){
    var id = req.params.id;
    model_candidate.findByIdAndUpdate(id, { $set: {name:req.body.name}}, function (err, docs) {
        res.json(docs);
    });
});

module.exports = router;
