var express = require('express');
var mongoose = require('mongoose');
var resource = mongoose.model('Data');
var router = express.Router();

router.get('/testdb', function(req, res) {
  res.send("Hi Out!");
  console.log(req);
});

router.post('/api/create', function(req, res) {
  var newData = new resource(req.body);  
  newData.save(function(err, rcd){
    if (err) console.log(err);
    res.json(rcd);
  });
});

router.get('/api/:userid/get/data', function(req, res){
	resource.find({ student_id : req.params.userid }).sort({ timestamp : -1 }).exec(function(err, rcd){
		if(err) console.log(rcd);
		res.json(rcd);
	});
});

router.get('/api/:userid/:courseid/get/data', function(req, res){
	resource.find({ student_id : req.params.userid, course_id : req.params.courseid }).sort({ timestamp : 1 }).exec(function(req, res){
		if(err) console.log(rcd);
		res.json(rcd);
	});
});

router.get('/api/:courseid/get/data', function(req, res){
	resource.find( { course_id : req.params.courseid }, { data : 1 } ).sort({ timestamp : 1 }).exec(function(req, res){
		if(err) console.log(rcd);
		res.json(rcd);
	});
});

router.get('/api/get/all', function(req, res){
	resource.find( function(err, rcd){
		if(err) console.log(err);
		res.json(rcd);
	});
});

module.exports = router;
