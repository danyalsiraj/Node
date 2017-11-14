const fs = require('fs');
var addNote = (title, body) => {
  //console.log('adding note ',title,body);
  var notes = []; //notes array
  var note = { //note object
    title,
    body
  };
  notes = allNotes(); //load all the previous notes so they do not get deleted, takes in the error message if file does not eists
  //check for duplicate notes
  var duplicateNotes = notes.filter((note) => {
    return note.title === title; //check it the title already exixts
  });
  if (duplicateNotes.length === 0) { //create the new note if no duplicate exists
    notes.push(note); //adds note to the notes array
    //fs.writeFileSync('notes_data.json', JSON.stringify(notes)); // just doing this will remove all the notes everytime we add
    saveNotes(notes);
    return note;
  } else {
    return null;

  }
};

var listAll = () => {
  //console.log('Listing all notes');
  return allNotes(); //send the message if no notes are found
}
var getNote = (title) => {
  //console.log('Getting ', title);
  var notes = allNotes();
  var searchedNote;
  var searchNotes = notes.filter((note) => {
    if (note.title = title) {
      searchedNote = note;
    }
  });
  return searchedNote;
}
var removeNote = (title) => {
  //console.log('Removing ', title);
  var notes = allNotes(); //get all notes
  var removedNote;
  var storedNotes = notes.filter((note) => { //keep all notes except the one we want to remove
    if (note.title === title) {
      removedNote = note;
    }
    return note.title !== title;
  });
  saveNotes(storedNotes);
  return removedNote;
}

//returns all notes
var allNotes = () => {
  try { //to check if there is existing data, if it does not exists it skips
    var allNotes = fs.readFileSync('notes_data.json'); //to make sure the previous notes do not get deleted when we add a new note
    return JSON.parse(allNotes);
  } catch (e) {
    return [];
  }
};
var saveNotes = (notes) => {
  fs.writeFileSync('notes_data.json', JSON.stringify(notes));
};

//this prints out the noteSearched
var printNotes = (note) => {
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Message: ${note.body}`);
}

module.exports = {
  addNote,
  listAll,
  getNote,
  removeNote,
  printNotes
};
