function NoteController(noteList, noteListView) {
  this.noteList = noteList;
  this.noteListView = noteListView;

  this.noteList.add("New Note");
  console.log(this.noteList.all());

  document.getElementById("app").innerHTML = this.noteListView.list();
}
