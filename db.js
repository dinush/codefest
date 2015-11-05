//Establishing connection and configuring db

var mongoose = require('mongoose');

var connect = function(){
	var options = {server: {socketOptions: {keepAlive: 1}}};
    mongoose.connect('mongodb://localhost/blink_data', options);
    console.log('DB Connected!');
}

connect();

mongoose.connection.on('error', function(err){
	console.log(err);
});

mongoose.connection.on('disconnected', function(){
	connect();
});


//Declaring Schemas and models

var Schema = mongoose.Schema;

var BlinkData = new Schema({	
	student_id : String,
	course_id: String,	
	student_data: [],
	timestamp : { type : Date, default: Date.now}
});

mongoose.model('Data', BlinkData);