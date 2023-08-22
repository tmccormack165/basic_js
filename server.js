var http = require('http');

var server = http.createServer(function(req, res){
    if(req.url == '/'){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write("<html><body><p>Home</p><script>console.log('Client Javascript');</script></body></html>");
	res.end();
    }
});

server.listen(5000);
console.log('The application is running on port 5000');
