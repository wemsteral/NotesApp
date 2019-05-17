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
    console.log(noteListView.list());
    assert.isTrue(
      noteListView.list() ===
        "<ul><li><div><a href=#notes/0>hello</a></div></li>\n<li><div><a href=#notes/1>world</a></div></li>\n<li><div><a href=#notes/2>!!!!!</a></div></li>\n</ul>"
    );
  }
  testReturn3NoteList();
})(this);

(function(exports) {
  function testReturnStringLength() {
    var newNoteList = new NoteList();
    newNoteList.add("this is a 20+ character string, how wonderful!");

    var noteListView = new NoteListView(newNoteList);

    assert.isTrue(
      noteListView.list() ===
        "<ul><li><div><a href=#notes/0>this is a 20+ charac</a></div></li>\n</ul>"
    );
  }
  testReturnStringLength();
})(this);
