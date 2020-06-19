//noteInput = Array.from(document.getElementsByName("note-content"));


formNewNote = document.getElementById("new-note");
var noteModel = document.getElementById("model-card");
savedNotes = document.getElementById("saved-notes"); 

formNewNote.addEventListener("submit", createNote);

function createNote() {
  newNoteContent = document.getElementById("note-content").value;
  newNote = noteModel.cloneNode(true);
  newNote.classList.remove("hidden");
  console.log(newNote);
  newNote.firstElementChild.textContent = newNoteContent;
  savedNotes.prepend(newNote);
}