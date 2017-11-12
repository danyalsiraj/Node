// var obj={
//   name: 'Danyal'
// };
//
// var strObj=JSON.stringify(obj);//converts the object to string
// console.log(typeof strObj);
// console.log(strObj);

// var personStr='{"Name":"Danyal", "Age":23}';//creates a string of person
// var person= JSON.parse(personStr);//converts it into object
// console.log(typeof person);
// console.log(person);

const fs= require('fs');

var origNote={
  title: 'Title here',
  body:'body here'
};
var origNoteStr= JSON.stringify(origNote);
console.log(origNoteStr);
fs.writeFileSync('notes.json',origNoteStr);
var noteStr=fs.readFileSync('notes.json');
var noteObj= JSON.parse(noteStr);
console.log(typeof noteObj);
console.log(noteObj.title);
