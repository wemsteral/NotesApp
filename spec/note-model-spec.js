(function(exports) {
  function testNoteDefaultsToArgument() {
    var note = new Note("My favourite language is Javascript");
    if (note.text() !== "My favourite language is Javascript") {
      throw new Error("not initialised with empty string");
    }
  }

  testNoteDefaultsToArgument();
})(this);
