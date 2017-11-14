const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

//const argv = yargs.argv;// we modify it below to check for conditions
const titleOption = {
  describe: 'Title of Note', //what title is
  demand: true, //if its required
  alias: 't' //so the user does not have to type ttle everytime
}
const bodyOption = {
  describe: 'Enter the Note',
  demand: false,
  alias: 'b'
}
const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOption,
    body: bodyOption
  })
  .command('list', 'List all Notes')
  .command('read', 'Read Note', {
    title: titleOption
  })
  .command('remove', 'Remove Note', {
    title: titleOption
  })
  .help() //just prints out all the available functions
  .argv

// var command=process.argv[2];// fetches th user input from command line at argument 3, arg1 is node, arg 2 is the file name
var command = argv._[0]; //does the same as above satement
console.log('Command is ', command);
//console.log('process: ', process.argv);
//console.log('yargs: ', argv);

if (command === 'add') {
  //console.log('Adding Note');
  var note = notes.addNote(argv.title, argv.body); //takes in the title of note and description and creates a note
  if (note !== null) {
    console.log('Note created');
    notes.printNotes(note);

  } else {
    console.log('Note already exists');
  }

} else if (command === 'list') {
  //console.log('Listing notes');
  var allNotes = notes.listAll();
  console.log(`You have ${allNotes.length} note(s)`);
  for (var i = 0; i < allNotes.length; i++) {
    notes.printNotes(allNotes[i]);
  }
} else if (command === 'getnote') {
  //console.log('reading notes');
  var noteSearched = notes.getNote(argv.title);
  console.log(noteSearched);
  if (note !== null) {
    notes.printNotes(noteSearched);
  } else {
    console.log('There are no notes with this title');
  }
} else if (command === 'remove') {
  //console.log('Removing notes');
  var removedNote = notes.removeNote(argv.title);
  if (removedNote) {
    console.log('--');
    console.log('Following note has been removed');
    notes.printNotes(removedNote);
  } else {
    console.log('There are no notes with this title');
  }
} else {
  console.log('enter a valid command');
}
