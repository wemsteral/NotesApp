function NoteListView(noteList) {
  this._noteList = noteList;
}

NoteListView.prototype.list = function() {
  var string = "<ul>";
  this._noteList.all().map(function(note) {
    string +=
      "<li><div><a href=#notes/" +
      note.id() +
      ">" +
      note.text().substr(0, 20) +
      "</a></div></li>\n";
  });
  string += "</ul>";
  return string;
};
