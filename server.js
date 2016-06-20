var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
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
  res.send('POST request to the homepage');

});

app.delete('/delete', function (req, res) {
  res.send("DELETE Messgae");
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
