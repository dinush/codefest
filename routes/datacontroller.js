var express = require('express');
var mongoose = require('mongoose');
var resource = mongoose.model('Data');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log(req);
});

router.post('/:userid/put', function(req, res, next) {
  var newData = new resource(req.body);
  
  newData.save(function(err, rcd){
    if (err) console.log(err);
  });
});

module.exports = router;
