(function(exports) {
  function testNoteDefaultsToArgument() {
    var note = new Note("My favourite language is Javascript");
    assert.isTrue(note.text() === "My favourite language is Javascript");
  }

  testNoteDefaultsToArgument();
})(this);
