var express = require('express');
var app = express();
var fs = require("fs");
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;//objectID object
var assert = require('assert');

var collect = "isThisReal";//collection name

var url = 'mongodb://localhost:27017/LFST';
//var mongoCommands = require('getmongo.js');

var bodyParser = require('body-parser');
var input = fs.readFileSync('LFST.json', 'utf8');
var obj = JSON.parse(input);
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


MongoClient.connect(url, function(err, db) {
assert.equal(null, err);


db.open(function(err, client){



var insertDocument = function(db, callback, insert) {


   db.collection(collect).insertOne(insert, function(err, result) {
    //assert.equal(err, null);
    console.log("Inserted a document into the collection.");
    callback();
  });
};

var findLFST = function(db, callback) {
  var return_doc;
   var cursor =db.collection(collect).find( );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        //console.log("hi");
         console.dir(doc);
         console.log("||||||||||||||||||||||||||");

         return_doc += doc;



         //return doc;
      } else {
        //return doc;

        //console.log(return_doc);

         callback();

      }
   });
   return return_doc;
};



var removeRestaurants = function(db, callback) {
   db.collection(collect).deleteMany(
      { "borough": "Manhattan" },
      function(err, results) {
         console.log(results);
         callback();
      }
   );
};


//test
/*
app.get('/',function(req,res){
  res.sendfile("index.html");
});*/

//GETS

app.get('/LFSTGET', function (req, res) {
   /*fs.readFile( __dirname + "/" + "LFST.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });*/

   var cursor =db.collection(collect).find();
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        //console.log("hi");
         console.dir(doc);
         //console.log("||||||||||||||||||||||||||");
         //console.log(doc);
         res.end(JSON.stringify(doc));



      } else {
        //return doc;

         //db.close();
         res.end(JSON.stringify(doc));

      }


     //docum = findLFST(db, function() {

         //db.close();
     //});

     //console.log("JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJIIIIIIIIIIIIIIIIIII");
//console.log(docum);


   //res.end(JSON.stringify(docum));
});
});







app.get('/GETById/:id', function (req, res) {
  //gets LFST document by id
  //57755027cb8370bc17387485
  //57754880dfc57c4006b523cf
  //57757132a4c101ac1a883b35
  var id = new ObjectID(req.params.id);
  //var id_to_be_passed = new ObjectID("57757132a4c101ac1a883b35");
   var cursor =db.collection(collect).find( { _id: id } );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        //console.log("hi");
         console.dir(doc);
         //console.log("||||||||||||||||||||||||||");
         //console.log(doc);
         res.end(JSON.stringify(doc));



      } else {
        //return doc;

         //db.close();
         res.end(JSON.stringify(doc));

      }

    });
});

app.get('/GETOKSById/:id', function (req, res) {
  //GETS spific parts
  var id = new ObjectID(req.params.id);
  var parsed_document;
  var str_doc;
  //var id_to_be_passed = new ObjectID("57757132a4c101ac1a883b35"); //test
   var cursor =db.collection(collect).find( { _id: id } );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        //console.log("hi");
         console.dir(doc);
         //console.log("||||||||||||||||||||||||||");
         //console.log(doc);
         str_doc = JSON.stringify(doc);
         parsed_document = JSON.parse(str_doc);
         //console.log(parsed_document.inputKnowledgeItems);
         //console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
         res.end(JSON.stringify(parsed_document.inputKnowledgeItems));
      } else {
        /*
          TODO: figure out what to here
        */
        //return doc;
         //db.close();
         res.end(JSON.stringify(doc));

      }

    });
    //res.end(parsed_document.inputKnowledgeItems);
});

app.get('/inputKnowledgeItemsGET/:id', function (req, res) {

  var id = new ObjectID(req.params.id);
  var parsed_document;
  var str_doc;
  //var id_to_be_passed = new ObjectID("57757132a4c101ac1a883b35"); //test
   var cursor =db.collection(collect).find( { _id: id } );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        //console.log("hi");
         console.dir(doc);
         //console.log("||||||||||||||||||||||||||");
         //console.log(doc);
         str_doc = JSON.stringify(doc);
         parsed_document = JSON.parse(str_doc);
         //console.log(parsed_document.inputKnowledgeItems);
         //console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
         res.end(JSON.stringify(parsed_document.inputKnowledgeItems));
      } else {
        /*
          TODO: figure out what to here
        */
        //return doc;
         //db.close();
         res.end(JSON.stringify(doc));

      }

    });

//old
  //console.log(JSON.stringify(obj.inputKnowledgeItems));
  //res.end(JSON.stringify(obj.inputKnowledgeItems));
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




// POST method route
app.post('/inputKnowledgeItemsPOST', function (req, res) {
  var item = req.body;
  console.log("Post inputKnowledgeItems");
  //var obj = JSON.parse(input);//converts json to javascript object
  var facebookapi = '{"AccountType": "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR","apikey": "34556357", "id" : "7"}';//information to be added
  console.log(item);
  obj.inputKnowledgeItems[obj.inputKnowledgeItems.length] = facebookapi;//adds example to json file, the JSON.parse converts string to json object
  console.log(JSON.stringify(obj));


  insertDocument(db, function() {
      //db.close();
  }, obj);
  /*fs.writeFile('test.json', JSON.stringify(obj), function (err) {
    if (err) return console.log(err);
      console.log('POST sucessfull');
  });*/
  res.end(JSON.stringify(obj));
  //res.end("Post inputKnowledgeItems");
});

app.post('/outputKnowledgeItemsPOST', function (req, res) {
  var item = req.body;
  console.log("Post outputKnowledgeItems");
  //var obj = JSON.parse(input);//converts json to javascript object
  //var facebookapi = '{"AccountType": "snapchat","apikey": "q234", "id" : "5"}';//information to be added
  console.log(item);
  obj.OutputKnowledgeItems[obj.OutputKnowledgeItems.length] = item;//adds example to json file, the JSON.parse converts string to json object
  console.log(JSON.stringify(obj));

  insertDocument(db, function() {
      db.close();
  }, obj);
  /*fs.writeFile('test.json', JSON.stringify(obj), function (err) {
    if (err) return console.log(err);
      console.log('POST sucessfull');
  });*/
  res.end(JSON.stringify(obj));
  //res.end("Post inputKnowledgeItems");
});

app.post('/learningStatePOST', function (req, res) {
  var item = req.body;
  console.log("Post learningState");
  //var facebookapi = '{"AccountType": "snapchat","apikey": "q234", "id" : "5"}';//information to be added
  console.log(item);
  obj.learningState[obj.learningState.length] = item;//adds example to json file, the JSON.parse converts string to json object
  console.log(JSON.stringify(obj));


  insertDocument(db, function() {
      db.close();
  }, obj);
  /*
  fs.writeFile('test.json', JSON.stringify(obj), function (err) {
    if (err) return console.log(err);
      console.log('POST sucessfull');
  });*/
  res.end(JSON.stringify(obj));
});

app.post('/stateTransitionPOST', function (req, res) {
  var item = req.body;
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

app.post('/outputReccomendationsPOST', function (req, res) {
  var item = req.body;
  console.log("Post outputReccomendations");
  //var obj = JSON.parse(input);//converts json to javascript object
  //var facebookapi = '{"AccountType": "snapchat","apikey": "q234", "id" : "5"}';//information to be added
  console.log(item);
  obj.outputReccomendations[obj.outputReccomendations.length] = item;//adds example to json file, the JSON.parse converts string to json object
  console.log(JSON.stringify(obj));
  fs.writeFile('test.json', JSON.stringify(obj), function (err) {
    if (err) return console.log(err);
      console.log('POST sucessfull');
  });
  res.end(JSON.stringify(obj));
  //res.end("Post inputKnowledgeItems");
});


//deletes

//OutputKnowledgeItems
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



//inputKnowledgeItems
app.delete('/inputKSDELETE/:id', function(req, res) {
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


//delete outputReccomendations
app.delete('/outputReccomendationsDELETE/:id', function(req, res) {
  console.log(obj);
  console.log("|||||||||||||||||||||||||||||||||||||||||||||||||");
  if(obj.outputReccomendations.length <= req.params.id) {
    res.statusCode = 404;
    return res.send('Error 404: item not found');
  }
obj.outputReccomendations.splice(req.params.id, 1);
  res.json(true);
  console.log(obj);
  fs.writeFile('test.json', JSON.stringify(obj), function (err) {
    if (err) return console.log(err);
    console.log("899899u9");
    console.log(JSON.stringify(obj));
      console.log('Delete sucessfull');
  });

});

});

//listener
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});

});
