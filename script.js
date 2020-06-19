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
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((x) => {
      x.classList.remove("active");
    });
    this.classList.add("active");
    let divClass = this.textContent.trim().toLowerCase();
    console.log(divClass);
    if (divClass == "trash") {
      document.querySelector(".notes").style.display = "none";
      document.querySelector(".trash").style.display = "flex";
    } else {
      document.querySelector(".trash").style.display = "none";
      document.querySelector(".notes").style.display = "flex";
    }
  });
});

const checkIfSavedElements = () => {
  const savedNotes = document.querySelector(".saved-notes");
  if (savedNotes.childElementCount <= 1)
    document.querySelector(".no-saved-notes").style.display = "flex";
  else document.querySelector(".no-saved-notes").style.display = "none";
};

checkIfSavedElements();
