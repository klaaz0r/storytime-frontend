var express = require('express');
var app = express();
var morgan = require('morgan');
var sass = require('node-sass-middleware');
var path = require('path');
var util = require('util');

var port = process.env.PORT || 8081;
//logging
if (process.env.NODE_ENV == "development") {
  util.log("Running in development mode");

  // !! in development we compile sass realtime !!
  // add this point it creates a public folder! it is ignored
  app.use(sass({
    src: __dirname + '/src',
    dest: __dirname + '/public/css',
    debug: true,
    outputStyle: 'compressed',
  }));

  app.use(express.static(__dirname + '/src'));
  //logging requests to the servers
  app.use(morgan(':method :url'));

} else if (process.env.NODE_ENV == "production") {
  util.log("Running in production mode");
  app.use(express.static(__dirname + '/dist'));
}

//start server
app.listen(port, function() {
  util.log("Server is ready on port " + port);
});
