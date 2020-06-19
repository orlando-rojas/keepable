const formNewNote = document.getElementById("new-note");
const noteModel = document.getElementById("model-card");
const savedNotes = document.getElementById("saved-notes");
const trash = document.getElementById("trash-notes");
var allNotes;

formNewNote.addEventListener("submit", createNote);

function createNote() {
  newNoteContent = document.getElementById("note-content").value;
  newNote = noteModel.cloneNode(true);
  newNote.classList.remove("hidden");
  newNote.firstElementChild.textContent = newNoteContent;
  trashIcon = newNote.children[1].children[1];
  trashIcon.addEventListener("click", moveToTrash);
  savedNotes.prepend(newNote);
  checkIfSavedElements();
  formNewNote.reset();
}


function moveToTrash() {
  const currentNote = this.parentElement.parentElement;
  const note = currentNote.cloneNode(true);
  const paletteIcon = note.children[1].children[0];
  const deleteIcon = note.children[1].children[1];
  const recoverIcon = note.children[1].children[2];
  paletteIcon.classList.add("hidden");
  recoverIcon.classList.remove("hidden");
  deleteIcon.addEventListener("click", deleteNote);
  recoverIcon.addEventListener("click", recoverNote);
  trash.prepend(note);
  currentNote.remove();
  checkIfSavedElements();
}

function recoverNote() {
  const currentNote = this.parentElement.parentElement;
  const recoveredNote = currentNote.cloneNode(true);
  const paletteIcon = recoveredNote.children[1].children[0];
  const trashIcon = recoveredNote.children[1].children[1];
  const recoverIcon = recoveredNote.children[1].children[2];
  paletteIcon.classList.remove("hidden");
  recoverIcon.classList.add("hidden");
  trashIcon.addEventListener("click", moveToTrash);
  savedNotes.prepend(recoveredNote);
  currentNote.remove();
}

function deleteNote() {
  const currentNote = this.parentElement.parentElement;
  currentNote.remove();
}

const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((x) => {
      x.classList.remove("active");
    });
    this.classList.add("active");
    let divClass = this.textContent.trim().toLowerCase();
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
  console.log(savedNotes);
  if (savedNotes.childElementCount <= 2)
    document.querySelector(".no-saved-notes").style.display = "flex";
  else document.querySelector(".no-saved-notes").style.display = "none";
};

checkIfSavedElements();

const apiKey = "fe8b6b3e90864740ab311327201906";

function processCoords(position) {
  let weather = document.querySelector(".weather");
  let location = {};
  let currentLocation = {};
  currentLocation["latitude"] = position.coords.latitude;
  currentLocation["longitude"] = position.coords.longitude;
  getData(currentLocation).then((data) => {
    location["city"] = data.location.name;
    location["region"] = data.location.region;
    location["country"] = data.location.country;
    location["temperature"] = data.current.temp_c;
    location["condition"] = data.current.condition.text;
    weather.textContent = `Today's Forecast for ${location["city"]}, ${location["region"]} Province, ${location["country"]}: ${location["temperature"]}°, ${location["condition"]}`;
  });
}

navigator.geolocation.getCurrentPosition(processCoords);

function getData(location) {
  return fetch(
    `https://api.weatherapi.com/v1/current.json?key=fe8b6b3e90864740ab311327201906&q=${location.latitude},${location.longitude}`
  ).then((response) => {
    return response.json();
  });
}
