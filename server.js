var http = require("http");
var url = require("url");

var mark2 = require("./mark2.js");
mark2.initialize();

function onRequest(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});

	var puzzle = url.parse(request.url).pathname.slice(1);
	if(mark2.available_scramblers.indexOf(puzzle) != -1)
		response.write(mark2.scramblers[puzzle].getRandomScramble().scramble);
	else    
		response.write("No puzzle found");
	response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server has started.");
