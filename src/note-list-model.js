(function(exports) {
  function NoteList() {
    this._notes = [];
  }

  NoteList.prototype.all = function() {
    return this._notes;
  };

  exports.NoteList = NoteList;
})(this);
