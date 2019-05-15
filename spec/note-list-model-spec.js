const { guarantee, check, xcheck, end, group } = require("wemtester");
const { NoteList } = require("../src/note-list-model");

(function(exports) {
  function isInitialisedWithEmptyArray() {
    var notelist = new NoteList();
    assert.isTrue(
      Array.isArray(notelist.all()) === true && notelist.all.length === 0
    );
  }

  isInitialisedWithEmptyArray();
})(this);

(function(exports) {
  function addsNoteToAllArray() {
    var notelist = new NoteList();
    notelist.add("note1");
    assert.isTrue(notelist.all()[0].text() === "note1");
  }

  addsNoteToAllArray();
})(this);
