(function(exports) {
  function testNoteListsAllNotes() {
    var notelist = new NoteList();
    if (Array.isArray(notelist.all()) !== true) {
      throw new Error("can't find list array");
    }
  }

  testNoteListsAllNotes();
})(this);

// var noteOne = new Note("My favourite language is Javascript");
// var noteTwo = new Note("My favourite sandwich is Bacon");
// var noteThree = new Note("My favourite novel is Grapes of Wrath");
// var notebook = new NoteList(noteOne, noteTwo, noteThree)
