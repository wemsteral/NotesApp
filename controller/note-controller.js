function NoteController(noteList, noteListView) {
  var self = this;
  this.noteList = noteList;
  this.noteListView = noteListView;
}

NoteController.prototype.addNote = function(text) {
  this.noteList.add(text);
};

NoteController.prototype.updateDOM = function() {
  document.getElementById("app").innerHTML = this.noteListView.list();
};

NoteController.prototype.getIdFromUrl = function(location) {
  return parseInt(location.hash.split("#")[1]);
};

NoteController.prototype.getNoteFromId = function(id) {
  var found = this.noteList.all().find(function(element) {
    if (element.id() === id) {
      return element;
    }
  });
  return found;
};

NoteController.prototype.goToSingleNote = function() {
  var self = this;
  window.addEventListener("hashchange", function() {
    var theNote = self.getNoteFromId(self.getIdFromUrl(window.location));
    var singleNoteView = new SingleNoteView(theNote);
    document.getElementById("app").innerHTML = singleNoteView.noteHTML();
  });
};
