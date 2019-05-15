const { guarantee, check, xcheck, end, group } = require("wemtester");
const { Note } = require("../src/note-model");
var assert = require("./assert");

(function(exports) {
  function testNoteDefaultsToArgument() {
    var note = new Note("My favourite language is Javascript");
    assert.isTrue(note._text === "My favourite language is Javascript");
  }

  testNoteDefaultsToArgument();
})(this);
