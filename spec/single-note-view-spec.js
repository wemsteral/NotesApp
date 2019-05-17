/// attribute reader works?
(function(exports) {
  // mock noteModel
  function NoteDouble(string2) {
    this._text = string2;
  }

  NoteDouble.prototype.text = function() {
    return this._text;
  };
  function testReturnSingleNoteText() {
    noteDouble = new NoteDouble("hello world");
    singleNoteView = new SingleNoteView(noteDouble);
    console.log(singleNoteView.returnNoteText());
    assert.isTrue(singleNoteView.returnNoteText() === "hello world");
  }
  testReturnSingleNoteText();

  function testReturnTextInHtmlString() {
    noteDouble = new NoteDouble("put me in html");
    singleNoteView = new SingleNoteView(noteDouble);
    console.log(singleNoteView.noteHTML());
    assert.isTrue(singleNoteView.noteHTML() === "<div>put me in html</div>");
  }
  testReturnTextInHtmlString();
})(this);
