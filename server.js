const folder = './static/videos/';
const express = require('express');
var morgan = require('morgan')
var app = express();
var schedule = require('node-schedule');
app.use(morgan('combined'));
app.use(express.static('static'));

const fs = require("fs");

app.get('/listFiles', function (req, res) {
var names = [];
fs.readdir(folder, (err, files) => {
  files.forEach( file => {
       var name = file.split(".");
       names.push(name[0]);
    });
   res.end( JSON.stringify(names));
})
})


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

  var j = schedule.scheduleJob('*/2 * * * *', function(){
    var cp = require('child_process');
    var child = cp.fork('./worker');

    child.on('message', function(m) {
      // Receive results from child process
      console.log('received: ' + m);
    });

    // Send child process some work
    child.send('Please up-case this string');
  });

})
