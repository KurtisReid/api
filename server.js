var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.get('/',function(req,res){
  res.sendfile("index.html");
});

app.get('/listUsers', function (req, res) {

   fs.readFile( __dirname + "/" + "LFST.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/OutputKnowledgeItems', function (req, res) {
  //gets OutputKnowledgeItems only
   fs.readFile( __dirname + "/" + "LFST.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/learningState', function (req, res) {
  //gets Learning state only
   fs.readFile( __dirname + "/" + "LFST.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/learningState', function (req, res) {
  //gets Learning state only
   fs.readFile( __dirname + "/" + "LFST.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/stateTransition', function (req, res) {
  //gets stateTransition only
   fs.readFile( __dirname + "/" + "LFST.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/outputReccomendations', function (req, res) {
  //gets outputReccomendations only
   fs.readFile( __dirname + "/" + "LFST.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})


app.put('/put', function (req, res) {
  res.send('Put message');
});


// POST method route
app.post('/post', function (req, res) {

  var user_name=req.body.email;

    //var password=req.body.password;
    console.log("User name = "+user_name);
    res.end("yes");


  //res.send('POST request to the homepage');

  /*
  var facebookapi = '{"AccountType": "facebook","apikey": "123", "id" : "1"}'
  var inputKS = fs.readFileSync('inputKS.json', 'utf8');

  var obj = JSON.parse(inputKS);
  obj["inputKnowledgeItems2"].push({"AccountType": "facebook","apikey": "123", "id" : "1"});
  jsonStr = JSON.stringify(obj);

console.log('post message');
*/



    //res.send('inputKnowledgeItems: ' + req.body);
  //post location

  //post SocialNetwork
  //inputKnowledgeItems.SocialNetwork.AccountType = "facebook";
  //inputKnowledgeItems.SocialNetwork.apikey = ""

  //post stateChanges


});

app.delete('/delete', function (req, res) {
  res.send("DELETE Messgae");
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
