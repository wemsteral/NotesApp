(function(exports) {
  function Testtest() {
    var note = new Note();
    if (note.text !== "") {
      throw new Error("not initialised with empty string");
    }
  }

  Testtest();
})(this);
