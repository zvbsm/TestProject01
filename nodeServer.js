var express = require('express'),
//cors = require('cors'),
server = express();

server.use(express.static(__dirname));
//server.use(cors());
//server.options = ('*', cors());


server.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});


server.get('/', function(req, res, next){
  res.json({msg: 'This is CORS-enabled for all origins!'});
});

server.listen(8000, function() {
	console.log('server listening on port 8000');
});