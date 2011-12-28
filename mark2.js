var fs = require('fs');
var vm = require('vm');

// requires local copies of mark2 scrambler files
vm.runInThisContext(fs.readFileSync("./scramble_222.js"));
vm.runInThisContext(fs.readFileSync("./scramble_333.js"));
vm.runInThisContext(fs.readFileSync("./scramble_NNN.js"));
vm.runInThisContext(fs.readFileSync("./scramble_sq1.js"));

exports.scramblers = scramblers;
exports.available_scramblers= ["222", "333", "444", "555", "666", "777", "sq1"];
exports.initialize = function() {
	scramblers["222"].initialize(null, Math);
	scramblers["333"].initialize(null, Math);
	scramblers["444"].initialize(null, Math);
	scramblers["555"].initialize(null, Math);
	scramblers["666"].initialize(null, Math);
	scramblers["777"].initialize(null, Math);
	scramblers["sq1"].initialize(null, Math);
};
