var express = require('express');
var app = express();
var  https = require('https');


//Database Configuration
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.end();

//Gets a player from the database
app.get  ('/getPlayer', function (req, res){

})

//Creates a new player in the database
app.post  ('/createPlayer', function (req, res){

})

//Adds a player to the database
app.put  ('/addPlayer', function (req, res){

})


//Removes a player from the database
app.delete  ('/deletePlayer', function (req, res){

})



// error handler
app.use(function(err, req) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
