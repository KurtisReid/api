
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var input = fs.readFileSync('LFST.json', 'utf8');
var obj = JSON.parse(input);
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var ObjectID = require('mongodb').ObjectID;//objectID object

var collect = "replicaset_mongo_client_collection";

MongoClient.connect("mongodb://localhost:27017/integration_test", function(err, db) {
console.log("assert.ok(db != null)");


  // inserts new LFST file into
  app.post('/newLFST/', function (req, res) {
    var item = req.body;
    //var itemID;
    console.log("Post outputKnowledgeItems");

    var itemID;

    db.collection(collect).insertOne(item, function(err, result) {
      //assert.equal(err, null);
      console.log("Inserted a document into the collection.");
      itemID = item._id;
      //console.log(insert);
      console.log("itemID: " + itemID);
      res.end(itemID.toString());//sends user the id of the document
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
        res.end("doc == null");

      }

    });
  });

  app.get('/GETOKSById/:id', function (req, res) {
    //GETS spific parts
    console.log("/GETOKSById/");
    var id = new ObjectID(req.params.id);
    console.log("/GETOKSById/" + id);
    var parsed_document;
    var str_doc;
    //var id_to_be_passed = new ObjectID("57757132a4c101ac1a883b35"); //test
    var cursor =db.collection(collect).find( { _id: id } );
    console.log("/////////////// CURSOR ///////////////////");
    console.log(cursor);
    console.log("/////////////// END CURSOR ///////////////////");
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
        res.end("doc == null");
        //res.end(JSON.stringify(doc));

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
        res.end("doc == null");
        //res.end(JSON.stringify(doc));

      }

    });

    //old
    //console.log(JSON.stringify(obj.inputKnowledgeItems));
    //res.end(JSON.stringify(obj.inputKnowledgeItems));
  })

  app.get('/OutputKnowledgeItemsGET/:id', function (req, res) {

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
        res.end(JSON.stringify(parsed_document.OutputKnowledgeItems));
      } else {
        /*
        TODO: figure out what to here
        */
        //return doc;
        //db.close();
        res.end(JSON.stringify(doc));

      }

    });

    //console.log(JSON.stringify(obj.OutputKnowledgeItems));
    //res.end(JSON.stringify(obj.OutputKnowledgeItems));
  })

  app.get('/learningStateGET/:id', function (req, res) {

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
        res.end(JSON.stringify(parsed_document.learningState));
      } else {
        /*
        TODO: figure out what to here
        */
        //return doc;
        //db.close();
        res.end(JSON.stringify(doc));

      }

    });

    //console.log(JSON.stringify(obj.learningState));
    //res.end(JSON.stringify(obj.learningState));
  })

  app.get('/stateTransitionGET/:id', function (req, res) {

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
        res.end(JSON.stringify(parsed_document.stateTransition));
      } else {
        /*
        TODO: figure out what to here
        */
        //return doc;
        //db.close();
        res.end(JSON.stringify(doc));

      }

    });
    //console.log(JSON.stringify(obj.stateTransition));
    //res.end(JSON.stringify(obj.stateTransition));
  })

  app.get('/outputReccomendationsGET/:id', function (req, res) {

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
        res.end(JSON.stringify(parsed_document.outputReccomendations));
      } else {
        /*
        TODO: figure out what to here
        */
        //return doc;
        //db.close();
        res.end(JSON.stringify(doc));

      }

    });
    //console.log(JSON.stringify(obj.outputReccomendations));
    //res.end(JSON.stringify(obj.outputReccomendations));

  })



  // POST method route
  app.post('/inputKnowledgeItemsPOST/:id', function (req, res) {
    var item = req.body;
    var obj;
    console.log("Post inputKnowledgeItems");
    //var facebookapi = '{"AccountType": "RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR","apikey": "34556357", "id" : "7"}';//information to be added
    console.log(item);

    var id = new ObjectID(req.params.id);
    var parsed_document;
    //var str_doc;
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
        obj = JSON.parse(str_doc);
        //console.log(parsed_document.inputKnowledgeItems);
        //console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
        //res.end(JSON.stringify(parsed_document.inputKnowledgeItems));


        console.log(item);
        obj.inputKnowledgeItems[obj.inputKnowledgeItems.length] = item;//adds example to json file, the JSON.parse converts string to json object
        console.log(JSON.stringify(obj));

        insertDocument(db, function() {
          db.close();
        }, obj);
        /*fs.writeFile('test.json', JSON.stringify(obj), function (err) {
        if (err) return console.log(err);
        console.log('POST sucessfull');
      });*/
      res.end(JSON.stringify(obj));
      } else {
      /*
      TODO: figure out what to here
      */
      //return doc;
      //db.close();
      res.end("doc == null");

      }

    });
  //res.end("Post inputKnowledgeItems");
  });


  app.post('/outputKnowledgeItemsPOST/:id', function (req, res) {
    var item = req.body;
    console.log("Post outputKnowledgeItems");

    //var obj = JSON.parse(input);//converts json to javascript object
    //var facebookapi = '{"Hello": "Wherever","you": "are", "id" : "4444444444"}';//information to be added

    var obj;
    var id = new ObjectID(req.params.id);
    var parsed_document;
    //var str_doc;
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
        obj = JSON.parse(str_doc);
        //console.log(parsed_document.inputKnowledgeItems);
        //console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
        //res.end(JSON.stringify(parsed_document.inputKnowledgeItems));


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
      } else {

      //return doc;
      //db.close();
      res.end("doc == null");

      }

    });


  //res.end("Post inputKnowledgeItems");
  });


  app.post('/learningStatePOST/:id', function (req, res) {
    var item = req.body;
    console.log("Post learningState");
    //var facebookapi = '{"AccountType": "snapchat","apikey": "q234", "id" : "5"}';//information to be added
    console.log(item);

    var obj;
    var id = new ObjectID(req.params.id);
    var parsed_document;
    //var str_doc;
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
        obj = JSON.parse(str_doc);
        //console.log(parsed_document.inputKnowledgeItems);
        //console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
        //res.end(JSON.stringify(parsed_document.inputKnowledgeItems));


        console.log(item);
        obj.learningState[obj.learningState.length] = item;//adds example to json file, the JSON.parse converts string to json object
        console.log(JSON.stringify(obj));

        insertDocument(db, function() {
          db.close();
        }, obj);
        /*fs.writeFile('test.json', JSON.stringify(obj), function (err) {
        if (err) return console.log(err);
        console.log('POST sucessfull');
      });*/
      res.end(JSON.stringify(obj));
      } else {

      //return doc;
      //db.close();
      res.end("doc == null");

      }

    });
  });

  app.post('/stateTransitionPOST/:id', function (req, res) {
    var item = req.body;
    console.log("Post stateTransition");
    //var facebookapi = '{"AccountType": "snapchat","apikey": "q234", "id" : "5"}';//information to be added
    console.log(item);

    var obj;
    var id = new ObjectID(req.params.id);
    var parsed_document;
    //var str_doc;
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
        obj = JSON.parse(str_doc);
        //console.log(parsed_document.inputKnowledgeItems);
        //console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
        //res.end(JSON.stringify(parsed_document.inputKnowledgeItems));


        console.log(item);
        obj.stateTransition[obj.stateTransition.length] = item;//adds example to json file, the JSON.parse converts string to json object
        console.log(JSON.stringify(obj));

        insertDocument(db, function() {
          db.close();
        }, obj);
        /*fs.writeFile('test.json', JSON.stringify(obj), function (err) {
        if (err) return console.log(err);
        console.log('POST sucessfull');
      });*/
      res.end(JSON.stringify(obj));
      } else {

      res.end("doc == null");

      }

    });

  });


  app.post('/outputReccomendationsPOST/:id', function (req, res) {
    var item = req.body;
    console.log("Post outputReccomendations");
    //var obj = JSON.parse(input);//converts json to javascript object
    //var facebookapi = '{"AccountType": "snapchat","apikey": "q234", "id" : "5"}';//information to be added
    console.log(item);

    var obj;
    var id = new ObjectID(req.params.id);
    var parsed_document;
    var cursor =db.collection(collect).find( { _id: id } );
    cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        console.dir(doc);
        str_doc = JSON.stringify(doc);
        obj = JSON.parse(str_doc);



        console.log(item);
        obj.outputReccomendations[obj.outputReccomendations.length] = item;//adds example to json file, the JSON.parse converts string to json object
        console.log(JSON.stringify(obj));

        insertDocument(db, function() {
          db.close();
        }, obj);

        res.end(JSON.stringify(obj));
      } else {

        res.end("doc == null");

      }

    });  //res.end("Post inputKnowledgeItems");
  });



  //deletes

  //OutputKnowledgeItems
  app.delete('/outputKSDELETE/:id/:oid', function(req, res) {
    //console.log(obj);
    //console.log("|||||||||||||||||||||||||||||||||||||||||||||||||");

    var obj;
    //var input = fs.readFileSync('LFST.json', 'utf8');
    //var obj = JSON.parse(input);
    var id = new ObjectID(req.params.id);
    var parsed_document;
    var cursor =db.collection(collect).find( { _id: id } );
    cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        console.dir(doc);
        str_doc = JSON.stringify(doc);
        obj = JSON.parse(str_doc);



        if(obj.OutputKnowledgeItems.length <= req.params.oid) {
          res.statusCode = 404;
          return res.send('Error 404: item not found');
        }
        obj.OutputKnowledgeItems.splice(req.params.oid, 1);
        res.json(true);
        console.log(obj);

        insertDocument(db, function() {
          //db.close();
        }, obj);
        console.log("DELETE                                  ");
        console.log(obj);
        res.end(JSON.stringify(obj));
        } else {

        res.end("doc == null");

        }

    });

  });


  //inputKnowledgeItems
  app.delete('/inputKSDELETE/:id/:oid', function(req, res) {
    //console.log(obj);
    //console.log("|||||||||||||||||||||||||||||||||||||||||||||||||");

    var obj;
    //var input = fs.readFileSync('LFST.json', 'utf8');
    //var obj = JSON.parse(input);
    var id = new ObjectID(req.params.id);
    var parsed_document;
    var cursor =db.collection(collect).find( { _id: id } );
    cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        console.dir(doc);
        str_doc = JSON.stringify(doc);
        obj = JSON.parse(str_doc);



        if(obj.inputKnowledgeItems.length <= req.params.oid) {
          res.statusCode = 404;
          return res.send('Error 404: item not found');
        }
        obj.inputKnowledgeItems.splice(req.params.oid, 1);
        res.json(true);
        console.log(obj);

        insertDocument(db, function() {
          //db.close();
        }, obj);
        console.log("DELETE                                  ");
        console.log(obj);
        res.end(JSON.stringify(obj));
        } else {

        res.end("doc == null");

        }

    });

  });

  //delete outputReccomendations
  app.delete('/outputReccomendationsDELETE/:id/:oid', function(req, res) {
    var obj;
    //var input = fs.readFileSync('LFST.json', 'utf8');
    //var obj = JSON.parse(input);
    var id = new ObjectID(req.params.id);
    var parsed_document;
    var cursor =db.collection(collect).find( { _id: id } );
    cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        console.dir(doc);
        str_doc = JSON.stringify(doc);
        obj = JSON.parse(str_doc);



        if(obj.outputReccomendations.length <= req.params.oid) {
          res.statusCode = 404;
          return res.send('Error 404: item not found');
        }
        obj.outputReccomendations.splice(req.params.oid, 1);
        res.json(true);
        console.log(obj);

        insertDocument(db, function() {
          //db.close();
        }, obj);
        console.log("DELETE                                  ");
        console.log(obj);
        res.end(JSON.stringify(obj));
        } else {

        res.end("doc == null");

        }

    });

  });


  var insertDocument = function(db, callback, insert) {
    var itemID;

    db.collection(collect).insertOne(insert, function(err, result) {
      //assert.equal(err, null);
      console.log("Inserted a document into the collection.");
      itemID = insert._id;
      //console.log(insert);
      console.log("itemID: " + itemID);
      //console.log("                                                        ");

      callback(itemID);
    });
  };




  var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port)

  });

});
