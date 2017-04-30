const fs = require('fs');

let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(e) {
    return [];
  }
};

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  }
  
  let duplicateNotes = notes.filter((note) => note.title === title);
  if(duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);

    return note;
  }
};

let getAllNotes = () => {
  return fetchNotes();
}

let readNote = (title) => {
  let notes = fetchNotes();
  let readNote = notes.filter((note) => note.title === title)[0];

  return readNote;
}

let removeNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
}

let logNote = (note) => {
  console.log('----');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  addNote,
  getAllNotes,
  readNote,
  removeNote,
  logNote
}
