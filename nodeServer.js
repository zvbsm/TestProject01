var express = require('express'),
cors = require('cors'),
server = express();

server.use(express.static(__dirname));
server.use(cors());
server.options = ('*', cors());

/*
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
*/

server.get('*', function(req, res, next){
  res.json({msg: 'This is CORS-enabled for all origins!'});
});

server.listen(8000, function() {
	console.log('server listening on port 8000');
});