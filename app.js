window.addEventListener("load", function() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  var controller = new NoteController(noteList, noteListView);

  controller.addNote("Favourite drink: seltzer");
  controller.addNote("Favourite drink: apple");
  controller.updateDOM();
});
