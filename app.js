var express = require('express');
var app = express();
var port = 3000;
//serving the public folder
app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
  console.log('app is running on port: ' + port);
});
