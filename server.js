var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var input = fs.readFileSync('LFST.json', 'utf8');
var obj = JSON.parse(input);
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies




//test
/*
app.get('/',function(req,res){
  res.sendfile("index.html");

});*/

app.get('/LFSTGET', function (req, res) {

   fs.readFile( __dirname + "/" + "LFST.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})


app.get('/OutputKnowledgeItemsGET', function (req, res) {

  console.log(JSON.stringify(obj.OutputKnowledgeItems));
  res.end(JSON.stringify(obj.OutputKnowledgeItems));
})

app.get('/learningStateGET', function (req, res) {

  console.log(JSON.stringify(obj.learningState));
  res.end(JSON.stringify(obj.learningState));
})



app.get('/stateTransitionGET', function (req, res) {

  console.log(JSON.stringify(obj.stateTransition));
  res.end(JSON.stringify(obj.stateTransition));
})

app.get('/outputReccomendationsGET', function (req, res) {

  console.log(JSON.stringify(obj.outputReccomendations));
  res.end(JSON.stringify(obj.outputReccomendations));

})


app.put('/put', function (req, res) {
  res.send('Put message');

});


// POST method route
app.post('/post', function (req, res) {
  //var facebookapi = '{"AccountType": "snapchat","apikey": "q234", "id" : "5"}';//information to be added
  console.log(item);
  obj.inputKnowledgeItems[obj.inputKnowledgeItems.length] = item;//adds example to json file, the JSON.parse converts string to json object
  console.log(JSON.stringify(obj));
  fs.writeFile('test.json', JSON.stringify(obj), function (err) {
    if (err) return console.log(err);
      console.log('POST sucessfull');
  });
  res.end(JSON.stringify(obj));

});

// POST method route
app.post('/inputKnowledgeItemsPOST', function (req, res) {
  console.log("Post inputKnowledgeItems");
  //var obj = JSON.parse(input);//converts json to javascript object
  //var facebookapi = '{"AccountType": "snapchat","apikey": "q234", "id" : "5"}';//information to be added
  console.log(item);
  obj.inputKnowledgeItems[obj.inputKnowledgeItems.length] = item;//adds example to json file, the JSON.parse converts string to json object
  console.log(JSON.stringify(obj));
  fs.writeFile('test.json', JSON.stringify(obj), function (err) {
    if (err) return console.log(err);
      console.log('POST sucessfull');
  });
  res.end(JSON.stringify(obj));
  //res.end("Post inputKnowledgeItems");
});

app.post('/stateTransitionPOST', function (req, res) {

  console.log("Post stateTransition");
  //var facebookapi = '{"AccountType": "snapchat","apikey": "q234", "id" : "5"}';//information to be added
  console.log(item);
  obj.stateTransition[obj.stateTransition.length] = item;//adds example to json file, the JSON.parse converts string to json object
  console.log(JSON.stringify(obj));
  fs.writeFile('test.json', JSON.stringify(obj), function (err) {
    if (err) return console.log(err);
      console.log('POST sucessfull');
  });
  res.end(JSON.stringify(obj));
});

app.delete('/outputKSDELETE/:id', function(req, res) {
  console.log(obj);
  console.log("|||||||||||||||||||||||||||||||||||||||||||||||||");
  if(obj.OutputKnowledgeItems.length <= req.params.id) {
    res.statusCode = 404;
    return res.send('Error 404: item not found');
  }

obj.OutputKnowledgeItems.splice(req.params.id, 1);
  res.json(true);
  console.log(obj);
  fs.writeFile('test.json', JSON.stringify(obj), function (err) {
    if (err) return console.log(err);
      console.log('Delete sucessfull');
  });

});

app.delete('/inputKSKSDELETE/:id', function(req, res) {
  console.log(obj);
  console.log("|||||||||||||||||||||||||||||||||||||||||||||||||");
  if(obj.inputKnowledgeItems.length <= req.params.id) {
    res.statusCode = 404;
    return res.send('Error 404: item not found');
  }

obj.inputKnowledgeItems.splice(req.params.id, 1);
  res.json(true);
  console.log(obj);
  fs.writeFile('test.json', JSON.stringify(obj), function (err) {
    if (err) return console.log(err);
    console.log("899899u9");
    console.log(JSON.stringify(obj));
      console.log('Delete sucessfull');
  });

});





var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
