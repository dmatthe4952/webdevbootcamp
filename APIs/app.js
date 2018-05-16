var express = require("express");
var app = express();
var request = require('request');

var bodyParser = require("body-parser");


app.get('/google', function(req, res){
  request('http://www.google.com', function(error,response, body){
    if(!error && response.statusCode == 200){
      console.log(body);
    }else{
      console.log(error);
    }
    res.send(body);
  });
});


app.get('*', function(req,res){
  res.send('<h1>Error: 404 - Page not found </h1>');
});


app.listen(process.env.PORT, process.env.IP, function(){
  console.log("App listening on port " + process.env.PORT);
});
