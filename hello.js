var http = require('http');
var fs = require('fs');
var url = require('url');
const PORT = process.env.PORT || 5000

http.createServer(function (req, res) {
	var q = url.parse(req.url, true);
	console.log(q);
	
	/*
	// Example parsing query string...
	var q = url.parse(req.url, true).query;
		// In browser, add query params: ?name=Bob&employer=JnJ
	var l_var = q.name + ' Kwarta works at ' + q.employer;
	res.writeHead(200, {'Content-Type': 'text/html'}); 
	res.end(l_var);
	*/

	var filename = "." + q.pathname;
	if (filename == './') {filename = './index';}
	
	filename = filename + ".html";
	console.log(filename);
	
	fs.readFile(filename, function(err, data) {
		if (err) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end("404 Not Found");
		}
		res.writeHead(200, {'Content-Type': 'text/html'});  
		res.write(data);
		
		return res.end();
	});
	
}).listen(PORT);


console.log('Server Listening on Port ' + PORT);

