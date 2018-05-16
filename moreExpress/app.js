var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var friends = [
  {
    name: 'Scott Simon'
  },
  {
    name: 'Charlie Daniels'
  },
  {
    name: 'Engelbert Humperdink'
  }
];


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
  res.render('home');
});

app.get("/friends", function(req,res){
  // console.log("In Friends " + friends[0].name);
  res.render('friends', {friends:friends});
});

app.post('/addfriend', function(req,res){
  console.log(req.body.name);
  var name = req.body.name;
  friends.push({name:name})
  res.redirect("/friends");
});


app.get('*', function(req,res){
  res.send("<h1>Page not found.<h1><p> code 404<p>");
});

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Listening on Port: " + process.env.PORT);
});
