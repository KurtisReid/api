var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//test
app.get('/',function(req,res){
  res.sendfile("index.html");

});

app.get('/listUsers', function (req, res) {

   fs.readFile( __dirname + "/" + "LFST.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})


app.get('/OutputKnowledgeItemsGET', function (req, res) {
  //gets OutputKnowledgeItems only
  //
   fs.readFile( __dirname + "/" + "LFST.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/learningStateGET', function (req, res) {
  //gets Learning state only
   fs.readFile( __dirname + "/" + "LFST.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})



app.get('/stateTransitionGET', function (req, res) {
  //gets stateTransition only
   fs.readFile( __dirname + "/" + "LFST.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/outputReccomendationsGET', function (req, res) {
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

  var user_name=req.body.email;//input
  console.log("User name = "+user_name);


  var input = fs.readFileSync('inputKS.json', 'utf8');
  var obj = JSON.parse(input);
  var facebookapi = '{"AccountType": "faceesgbook","apikey": "123", "id" : "2"}';

  obj.inputKnowledgeItems[1] = facebookapi;
  console.log(JSON.stringify(obj));
  res.end(JSON.stringify(obj));


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

// POST method route
app.post('/inputKnowledgeItemsPOST', function (req, res) {
  //post inputKnowledgeItems
  console.log("Post inputKnowledgeItems");
  res.end("Post inputKnowledgeItems");
});

app.post('/stateTransitionPOST', function (req, res) {
  //post stateTransitions
  console.log("Post stateTransition");
  res.end("Post stateTransition");
});

app.delete('/delete', function (req, res) {
  res.send("DELETE Messgae");
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
