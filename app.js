var express = require('express');
var app = express();
var morgan = require('morgan');

var port = 8080;
//serving the public folder
app.use(express.static(__dirname + '/public'));

//logging
app.use(morgan(':remote-addr :method :url'));

//start server
app.listen(port, function() {
  console.log('app is running on port: ' + port + '\n- - - - - - - - - - - - - - - ');
});
