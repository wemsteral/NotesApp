function Note(note, id) {
  this._text = note;
  this._id = id;
}

Note.prototype.text = function() {
  return this._text;
};

Note.prototype.id = function() {
  return this._id;
};
