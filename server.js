var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

app.all('*', function(req, res){
  var ip = req.headers['x-forwarded-for'] ||
           req.connection.remoteAddress ||
	         req.socket.remoteAddress ||
	         req.connection.socket.remoteAddress;
	var info = {
    'ipaddress': ip,
    'language': req.headers["accept-language"].split(',')[0],
    'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
  };
	res.send(info);
});

app.listen(port, function(){
    console.log('Server is listening on port ' + port + '!');
});
