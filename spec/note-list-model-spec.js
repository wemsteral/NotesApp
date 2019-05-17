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

(function(exports) {
  function firstNoteIdIsZero() {
    var newNoteList = new NoteList();
    newNoteList.add("id should be 0");
    assert.isTrue(newNoteList.all()[0].id() === 0);
  }
  firstNoteIdIsZero();
})(this);

(function(exports) {
  function thirdNoteIdIs2() {
    var newNoteList = new NoteList();
    newNoteList.add("id should be 0");
    newNoteList.add("id should be 1");
    newNoteList.add("id should be 2");
    assert.isTrue(newNoteList.all()[2].id() === 2);
    console.log("correct");
  }
  thirdNoteIdIs2();
})(this);
