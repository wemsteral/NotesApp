(function(exports) {
  function testNoteListsAllNotes() {
    function isInitialisedWithEmptyArray() {
      var notelist = new NoteList();
      assert.isTrue(
        Array.isArray(notelist.all()) === false && array.length > 0
      );
    }
  }

  testNoteListsAllNotes();
})(this);

// var noteOne = new Note("My favourite language is Javascript");
// var noteTwo = new Note("My favourite sandwich is Bacon");
// var noteThree = new Note("My favourite novel is Grapes of Wrath");
// var notebook = new NoteList(noteOne, noteTwo, noteThree)
