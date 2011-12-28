var fs = require('fs');
var vm = require('vm');

// requires local copies of mark2 scrambler files
vm.runInThisContext(fs.readFileSync("./scramble_222.js"));
vm.runInThisContext(fs.readFileSync("./scramble_333.js"));
vm.runInThisContext(fs.readFileSync("./scramble_NNN.js"));
vm.runInThisContext(fs.readFileSync("./scramble_sq1.js"));

available_scramblers = ["222", "333", "444", "555", "666", "777", "sq1"];

exports.scramblers = scramblers;
exports.available_scramblers = available_scramblers;
exports.initialize = function() {
	for(var i = 0; i < available_scramblers.length; i++)
	{
		scramblers[available_scramblers[i]].initialize(null, Math);
	}
};
