(function(exports) {
  function Note(note) {
    this._text = note;
  }

  Note.prototype.text = function() {
    return this._text;
  };

  exports.Note = Note;
})(this);
