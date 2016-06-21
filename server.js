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
  var input = fs.readFileSync('LFST.json', 'utf8');
  var obj = JSON.parse(input);

  console.log(JSON.stringify(obj.OutputKnowledgeItems));
  res.end(JSON.stringify(obj.OutputKnowledgeItems));
})

app.get('/learningStateGET', function (req, res) {
  //gets Learning state only
  var input = fs.readFileSync('LFST.json', 'utf8');
  var obj = JSON.parse(input);

  console.log(JSON.stringify(obj.learningState));
  res.end(JSON.stringify(obj.learningState));
})



app.get('/stateTransitionGET', function (req, res) {
  //gets stateTransition only
  var input = fs.readFileSync('LFST.json', 'utf8');
  var obj = JSON.parse(input);

  console.log(JSON.stringify(obj.stateTransition));
  res.end(JSON.stringify(obj.stateTransition));
})

app.get('/outputReccomendationsGET', function (req, res) {
  //gets outputReccomendations only
  var input = fs.readFileSync('LFST.json', 'utf8');
  var obj = JSON.parse(input);

  console.log(JSON.stringify(obj.outputReccomendations));
  res.end(JSON.stringify(obj.outputReccomendations));


})


app.put('/put', function (req, res) {
  res.send('Put message');
});


// POST method route
app.post('/post', function (req, res) {

  //var user_name=req.body.email;//input
  //console.log("User name = "+user_name);


  var input = fs.readFileSync('LFST.json', 'utf8');
  var obj = JSON.parse(input);//converts json to javascript object
  var facebookapi = '{"AccountType": "faceesgbook","apikey": "123", "id" : "2"}';//information to be added

  obj.inputKnowledgeItems[1] = facebookapi;//adds example to json file
  console.log(JSON.stringify(obj));
  res.end(JSON.stringify(obj));

});

// POST method route
app.post('/inputKnowledgeItemsPOST', function (req, res) {
  //post inputKnowledgeItems
  console.log("Post inputKnowledgeItems");
  var input = fs.readFileSync('LFST.json', 'utf8');
  var obj = JSON.parse(input);//converts json to javascript object
  var facebookapi = '{"AccountType": "faceesgbook","apikey": "123", "id" : "2"}';//information to be added

  obj.inputKnowledgeItems[1] = facebookapi;//adds example to json file
  console.log(JSON.stringify(obj));
  res.end(JSON.stringify(obj));
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
