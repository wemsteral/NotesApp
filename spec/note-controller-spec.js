(function() {
  function NoteListDouble() {}

  function NoteListViewDouble(noteListDouble) {
    this.noteListDouble = noteListDouble;
  }

  function testNewNoteController() {
    function isInitialisedWithNoteList() {
      var noteList = new NoteListDouble();
      var noteListView = new NoteListViewDouble(noteList);

      var noteController = new NoteController(noteList, noteListView);
      assert.isTrue(noteController.noteList === noteList);
    }
    isInitialisedWithNoteList();

    function isInitialisedWithNoteListView() {
      var noteList = new NoteListDouble();
      var noteListView = new NoteListViewDouble(noteList);

      var noteController = new NoteController(noteList, noteListView);
      assert.isTrue(noteController.noteListView === noteListView);
    }
    isInitialisedWithNoteListView();
  }

  testNewNoteController();
})(this);
