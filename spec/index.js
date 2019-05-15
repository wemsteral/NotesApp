const wemtester = require("wemtester");

require("../src/note-model");
require("./note-model-spec");
require("./note-list-model-spec");

wemtester.end();
