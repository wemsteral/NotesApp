function SingleNoteView(singleNote) {
  this._singleNote = singleNote;
}

SingleNoteView.prototype.returnNoteText = function() {
  return this._singleNote.text();
};

SingleNoteView.prototype.noteHTML = function() {
  return "<div>" + this.returnNoteText() + "</div>";
};
