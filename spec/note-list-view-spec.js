// returns empty list in HTML
(function(exports) {
  function testReturnEmptyNoteList() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);

    assert.isTrue(noteListView.list() === "<ul></ul>");
  }
  testReturnEmptyNoteList();
})(this);
// returns list of 3 items in HTML
(function(exports) {
  function testReturn3NoteList() {
    var noteList = new NoteList();
    noteList.add("hello");
    noteList.add("world");
    noteList.add("!!!!!");

    var noteListView = new NoteListView(noteList);

    assert.isTrue(
      noteListView.list() ===
        "<ul><li><div>hello</div></li>\n<li><div>world</div></li>\n<li><div>!!!!!</div></li>\n</ul>"
    );
  }
  testReturn3NoteList();
})(this);

(function(exports) {
  function testReturnStringLength() {
    var noteList = new NoteList();
    noteList.add("this is a 20+ character string, how wonderful!");

    var noteListView = new NoteListView(noteList);

    assert.isTrue(
      noteListView.list() ===
        "<ul><li><div>this is a 20+ charac</div></li>\n</ul>"
    );
  }
  testReturnStringLength();
})(this);
