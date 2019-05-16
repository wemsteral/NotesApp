function NoteListView(noteList) {
  this._noteList = noteList;
}

NoteListView.prototype.list = function() {
  var string = "<ul>";
  this._noteList.all().map(function(note) {
    string += "<li><div>" + note.text() + "</div></li>\n";
  });
  string += "</ul>";
  return string;
};
