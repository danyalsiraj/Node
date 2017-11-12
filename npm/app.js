const fs=require('fs');
const _= require('lodash');
const yargs=require('yargs');

const notes=require('./notes.js');

const argv=yargs.argv;

// var command=process.argv[2];// fetches th user input from command line at argument 3, arg1 is node, arg 2 is the file name
var command=argv._[0];//does the same as above satement
console.log('Command is ',command);
//console.log('process: ', process.argv);
console.log('yargs: ', argv);

if (command==='add'){
  //console.log('Adding Note');
notes.addNote(argv.title,argv.body); //takes in the title of note and description and creates a note
}
else if(command==='list'){
  //console.log('Listing notes');
  notes.listAll();
}
else if(command==='read'){
  //console.log('reading notes');
  notes.getNote(argv.title);
}
else if (command==='remove'){
  //console.log('Removing notes');
  notes.removeNote(argv.title);
}
else {
  console.log('enter a valid command');
}
