function NoteList() {
  this._notes = [];
}

NoteList.prototype.all = function() {
  return this._notes;
};

NoteList.prototype.add = function(string) {
  this._notes.push(new Note(string, this.nextNoteId()));
};

NoteList.prototype.nextNoteId = function() {
  return this.all().length;
};
