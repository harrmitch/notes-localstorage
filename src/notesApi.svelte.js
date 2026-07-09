let notesDB = $state([]);
let selected = $state(null);

const getNotesDB = () => notesDB;
const getSelected = () => selected;

const sortNotes = (notes) => {
  return notes.sort(
    (a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime()
  );
};

const getAllNotes = () => {
  // const fetchedNotes = [
  //   {
  //     id: 1,
  //     title: "Note 1",
  //     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     updated: new Date().toLocaleString(),
  //   },
  //   {
  //     id: 2,
  //     title: "Note 2",
  //     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     updated: new Date().toLocaleString(),
  //   },
  //   {
  //     id: 3,
  //     title: "Note 3",
  //     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     updated: new Date().toLocaleString(),
  //   },
  // ];

  const fetchedNotes = JSON.parse(localStorage.getItem("notesDB") || "[]");

  notesDB = sortNotes(fetchedNotes);
  selected = fetchedNotes ? fetchedNotes[0] : null;
};

const saveNote = (noteToSave) => {
  const existing = notesDB.findIndex((note) => note.id == noteToSave.id);

  noteToSave.title = noteToSave.title.trim();
  noteToSave.body = noteToSave.body.trim();
  const saveNote = { ...noteToSave, updated: new Date().toLocaleString() };

  if (existing != -1) {
    notesDB[existing] = saveNote;
    notesDB = sortNotes(notesDB);
  } else {
    notesDB = [saveNote, ...notesDB];
  }

  selected = saveNote;
  localStorage.setItem("notesDB", JSON.stringify($state.snapshot(notesDB)));
};

const deleteNote = (noteId) => {
  const notes = notesDB.filter((note) => note.id != noteId);
  localStorage.setItem("notesDB", JSON.stringify(notes));
  selected = notes ? notes[0] : null;
  notesDB = notes;
};

const setSelected = (note) => {
  selected = note;
}

export { getNotesDB, getAllNotes, saveNote, deleteNote, getSelected, setSelected };
