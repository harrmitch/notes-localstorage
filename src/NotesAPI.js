import { writable } from "svelte/store";

let notesDB = writable([]);
let selected = writable(null);

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

  notesDB.set(sortNotes(fetchedNotes));
  selected.set(fetchedNotes ? fetchedNotes[0] : null);
};

const saveNote = (noteToSave) => {
  notesDB.update((notes) => {
    let existing = notes.find((note) => note.id == noteToSave.id);

    noteToSave.title = noteToSave.title.trim();
    noteToSave.body = noteToSave.body.trim();
    let saveNote = { ...noteToSave, updated: new Date().toLocaleString() };

    if (existing) {
      existing = saveNote;
      notes = sortNotes(notes);
    } else {
      notes = sortNotes([...notes, saveNote]);
    }
    selected.set(saveNote);
    localStorage.setItem("notesDB", JSON.stringify(notes));
    return notes;
  });
};

const deleteNote = (noteId) => {
  notesDB.update((notes) => {
    notes = notes.filter((note) => note.id != noteId);
    localStorage.setItem("notesDB", JSON.stringify(notes));
    selected.set(notes ? notes[0] : null);
    return notes;
  });
};

export { notesDB, getAllNotes, saveNote, deleteNote, selected };
