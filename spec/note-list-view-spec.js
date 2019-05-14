(function(exports) {
  function testReturnEmptyNoteList() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);

    assert.isTrue(noteListView.list() === "<ul></ul>");
  }
  testReturnEmptyNoteList();
})(this);
