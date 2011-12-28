var http = require("http");
var url = require("url");

var mark2 = require("./mark2.js");
mark2.initialize();

function onRequest(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});

	var json = false;
	var puzzle = url.parse(request.url).pathname.slice(1);
	if(puzzle.substr(-5) === ".json")
	{
		json = true;
		puzzle = puzzle.substr(0, puzzle.length - 5);
	}
	if(mark2.available_scramblers.indexOf(puzzle) != -1)
	{
		var s = mark2.scramblers[puzzle].getRandomScramble();
		s = json ? JSON.stringify(s) : s.scramble;
		response.write(s);
	}
	else
	{ 
		response.write("No puzzle found");
	}
	response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server has started.");
