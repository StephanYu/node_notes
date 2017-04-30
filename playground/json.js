let fs = require('fs');

let originalNote = {
  title: 'Some title',
  body: 'Some body'
};

// save originalNote obj to a Json file and store in notes.json file in current folder
let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

// read notes.json file and convert into obj 
let noteString = fs.readFileSync('notes.json');
let noteObj = JSON.parse(noteString);
console.log(typeof noteObj);
console.log(noteObj.title);