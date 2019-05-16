function NoteController(noteList, noteListView) {
  this.noteList = noteList;
  this.noteListView = noteListView;
  console.log(noteList);
}

NoteController.prototype.addNote = function(text) {
  this.noteList.add(text);
};

NoteController.prototype.updateDOM = function() {
  document.getElementById("app").innerHTML = this.noteListView.list();
};
