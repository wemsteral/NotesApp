(function(exports) {
  function NoteList() {
    this._notes = [];
  }

  NoteList.prototype.all = function() {
    return this._notes;
  };

  NoteList.prototype.add = function(string) {
    this._notes.push(new Note(string));
  };

  exports.NoteList = NoteList;
})(this);
